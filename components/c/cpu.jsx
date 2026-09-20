import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vfmt5nbbe.css';
import '../../css/t/trjlbnd0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vfmt5nbbe"/><path class="trjlbnd0m"/></g>`,
		"fallback": "tabler:cpu",
	});
}

export default Component;
