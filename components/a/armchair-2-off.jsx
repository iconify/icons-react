import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/av2gbrbdj.css';
import '../../css/t/tv1re9-xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="av2gbrbdj"/><path class="tv1re9-xj"/></g>`,
		"fallback": "tabler:armchair-2-off",
	});
}

export default Component;
