import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wmjvdk1am.css';
import '../../css/o/o9x3zwbmh.css';
import '../../css/k/kkl8u6b3m.css';
import '../../css/e/ex1ol26-y.css';
import '../../css/j/jtwl_zhjq.css';
import '../../css/i/i4dcgmbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wmjvdk1am"/><path class="o9x3zwbmh"/><path class="kkl8u6b3m"/><path class="ex1ol26-y"/><path class="jtwl_zhjq"/><path class="i4dcgmbin"/></g>`,
		"fallback": "solar:folder-zip-broken",
	});
}

export default Component;
