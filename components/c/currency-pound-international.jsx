import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5f22zekm.css';
import '../../css/l/l3fhfibrp.css';
import '../../css/k/kau9hob4p.css';
import '../../css/h/htbamg2nv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f5f22zekm"/><path class="l3fhfibrp"/><path class="kau9hob4p"/><path class="htbamg2nv"/></g>`,
		"fallback": "streamline-ultimate-color:currency-pound-international",
	});
}

export default Component;
