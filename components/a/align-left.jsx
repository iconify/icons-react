import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nud_wmepy.css';
import '../../css/a/ap4bu0x7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nud_wmepy"/><path class="ap4bu0x7a"/></g>`,
		"fallback": "gg:align-left",
	});
}

export default Component;
