import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s--3oi83y.css';
import '../../css/d/d_yfgliwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s--3oi83y"/><path class="d_yfgliwf"/></g>`,
		"fallback": "iconoir:apple-shortcuts",
	});
}

export default Component;
