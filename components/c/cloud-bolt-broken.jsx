import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jftjo5bro.css';
import '../../css/q/qorq7_b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jftjo5bro"/><path class="qorq7_b_o"/></g>`,
		"fallback": "solar:cloud-bolt-broken",
	});
}

export default Component;
