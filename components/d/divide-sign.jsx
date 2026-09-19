import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gea6e1b-z.css';
import '../../css/d/ddrvxpbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gea6e1b-z"/><path class="ddrvxpbgf"/></g>`,
		"fallback": "hugeicons:divide-sign",
	});
}

export default Component;
