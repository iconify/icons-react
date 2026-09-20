import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b_mqzbbbw.css';
import '../../css/h/hkxdjtygn.css';
import '../../css/j/joaj3f0ng.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b_mqzbbbw"/><path class="hkxdjtygn"/><path class="joaj3f0ng"/><path class="pw8f5c0fp"/></g>`,
		"fallback": "solar:code-square-linear",
	});
}

export default Component;
