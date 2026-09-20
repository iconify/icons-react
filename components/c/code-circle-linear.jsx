import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eqca_gfdy.css';
import '../../css/b/b_mqzbbbw.css';
import '../../css/h/hkxdjtygn.css';
import '../../css/j/joaj3f0ng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eqca_gfdy"/><path class="b_mqzbbbw"/><path class="hkxdjtygn"/><path class="joaj3f0ng"/></g>`,
		"fallback": "solar:code-circle-linear",
	});
}

export default Component;
