import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/oj30h6aev.css';
import '../../css/f/f70gywb1p.css';
import '../../css/i/ihlljlbzl.css';
import '../../css/o/oqjn4eb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="oj30h6aev wm-shadow"/><path class="f70gywb1p wm-shadow"/><path class="ihlljlbzl"/><path class="oqjn4eb_u"/></g>`,
		"fallback": "withicons-brutal:droplet",
	});
}

export default Component;
