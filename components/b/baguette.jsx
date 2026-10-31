import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m29432y_i.css';
import '../../css/l/llp865ckr.css';
import '../../css/c/c50pgs10y.css';
import '../../css/w/wep5oacvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="m29432y_i wm-shadow"/><path class="llp865ckr wm-shadow"/><path class="c50pgs10y"/><path class="wep5oacvq"/></g>`,
		"fallback": "withicons-brutal:baguette",
	});
}

export default Component;
