import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/j/j56zj4bua.css';
import '../../css/n/n0kyqub_b.css';
import '../../css/n/n9mxd6ntn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="j56zj4bua"/><path class="n0kyqub_b"/><path class="n9mxd6ntn"/></g>`,
		"fallback": "solar:cardholder-linear",
	});
}

export default Component;
