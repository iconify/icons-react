import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/avnp3nxox.css';
import '../../css/h/h_i1j4_fb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="avnp3nxox"/><path class="h_i1j4_fb"/></g>`,
		"fallback": "solar:flag-line-duotone",
	});
}

export default Component;
