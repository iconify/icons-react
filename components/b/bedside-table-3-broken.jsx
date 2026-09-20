import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khhypgwbg.css';
import '../../css/d/d2-0y-bwi.css';
import '../../css/n/nv6qhg7zp.css';
import '../../css/s/sxx_hdb0w.css';
import '../../css/z/zpppr_yxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="khhypgwbg"/><path class="d2-0y-bwi"/><path class="nv6qhg7zp"/><path class="sxx_hdb0w"/><path class="zpppr_yxj"/></g>`,
		"fallback": "solar:bedside-table-3-broken",
	});
}

export default Component;
