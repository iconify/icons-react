import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fld8c3bto.css';
import '../../css/d/dk0jq69yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fld8c3bto"/><path clip-rule="evenodd" class="dk0jq69yo"/></g>`,
		"fallback": "flowbite:cash-register-solid",
	});
}

export default Component;
