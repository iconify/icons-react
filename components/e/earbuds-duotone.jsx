import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m12falb8k.css';
import '../../css/v/vhhuxqbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m12falb8k secondary"/><path class="primary vhhuxqbuk"/></g>`,
		"fallback": "iconaut:earbuds-duotone",
	});
}

export default Component;
