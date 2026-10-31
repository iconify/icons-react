import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z08y1bcpn.css';
import '../../css/b/bh140t6kr.css';
import '../../css/f/ffk-nebfy.css';
import '../../css/o/oqoijq82d.css';
import '../../css/y/y5y92yget.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow z08y1bcpn"/><path class="bh140t6kr wm-shadow"/><path class="ffk-nebfy"/><path class="oqoijq82d"/><path class="y5y92yget"/></g>`,
		"fallback": "withicons-brutal:hammer",
	});
}

export default Component;
