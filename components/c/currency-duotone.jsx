import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p9_8uhbsi.css';
import '../../css/q/qwh98lngy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p9_8uhbsi secondary"/><path class="primary qwh98lngy"/></g>`,
		"fallback": "iconaut:currency-duotone",
	});
}

export default Component;
