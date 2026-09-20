import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bqod4ub1y.css';
import '../../css/q/qtuy6acvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bqod4ub1y"/><path class="qtuy6acvb"/></g>`,
		"fallback": "keyline-icons:cursor-click-duotone",
	});
}

export default Component;
