import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8sr0bcyc.css';
import '../../css/a/ajhwufbzx.css';
import '../../css/s/s7w85u64u.css';
import '../../css/q/qg1h5kb5o.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e8sr0bcyc"/><path class="ajhwufbzx"/><path class="s7w85u64u"/><path class="qg1h5kb5o"/><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-chart-line-duotone",
	});
}

export default Component;
