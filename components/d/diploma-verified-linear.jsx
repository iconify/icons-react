import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-e2_lmrw.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/d/d20-0wyrx.css';
import '../../css/p/pq0e-etnf.css';
import '../../css/a/a0l-fdc8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f-e2_lmrw"/><path class="n1_ykhn3f"/><path class="d20-0wyrx"/><path class="pq0e-etnf"/><path class="a0l-fdc8b"/></g>`,
		"fallback": "solar:diploma-verified-linear",
	});
}

export default Component;
