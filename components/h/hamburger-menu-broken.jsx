import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c_wyezbbg.css';
import '../../css/i/ihwi1gbya.css';
import '../../css/z/zj3_xl2hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c_wyezbbg"/><path class="ihwi1gbya"/><path class="zj3_xl2hb"/></g>`,
		"fallback": "solar:hamburger-menu-broken",
	});
}

export default Component;
