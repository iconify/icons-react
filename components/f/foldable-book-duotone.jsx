import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ke_d9ov9v.css';
import '../../css/h/h94ihihad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ke_d9ov9v secondary"/><path class="h94ihihad primary"/></g>`,
		"fallback": "iconaut:foldable-book-duotone",
	});
}

export default Component;
