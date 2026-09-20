import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o7wuixk5m.css';
import '../../css/k/kf5zcac5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o7wuixk5m"/><path class="kf5zcac5a"/></g>`,
		"fallback": "tabler:git-merge",
	});
}

export default Component;
