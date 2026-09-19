import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gxh-1lbdu.css';
import '../../css/w/w0c61wvcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gxh-1lbdu"/><path class="w0c61wvcr"/></g>`,
		"fallback": "iconoir:closet",
	});
}

export default Component;
