import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/crgy0zb4p.css';
import '../../css/b/bd6ylhbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="crgy0zb4p"/><path class="bd6ylhbcd"/></g>`,
		"fallback": "iconoir:archive",
	});
}

export default Component;
