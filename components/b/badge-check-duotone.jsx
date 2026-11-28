import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x79mqdays.css';
import '../../css/f/f84r8obya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary x79mqdays"/><path class="f84r8obya primary"/></g>`,
		"fallback": "iconaut:badge-check-duotone",
	});
}

export default Component;
