import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/ftv_f1wkh.css';
import '../../css/s/s8khy9bka.css';
import '../../css/h/hpycffb-n.css';
import '../../css/q/qkff5wbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ftv_f1wkh wm-shadow"/><path class="s8khy9bka wm-shadow"/><path class="hpycffb-n"/><path class="qkff5wbzg wm-s"/></g>`,
		"fallback": "withicons-brutal:champagne-toast",
	});
}

export default Component;
