import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hhwiqjw1s.css';
import '../../css/a/anxe_vbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hhwiqjw1s secondary"/><path class="anxe_vbsk primary"/></g>`,
		"fallback": "iconaut:arrow-up-narrow-wide-duotone",
	});
}

export default Component;
