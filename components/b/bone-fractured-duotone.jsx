import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyhwxtbvu.css';
import '../../css/s/s9q38ybsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cyhwxtbvu secondary"/><path class="primary s9q38ybsh"/></g>`,
		"fallback": "iconaut:bone-fractured-duotone",
	});
}

export default Component;
