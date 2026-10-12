import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqc4kqwcp.css';
import '../../css/c/cx_r_q9xv.css';
import '../../css/z/zhgbw2bsy.css';
import '../../css/x/xak2o0bmu.css';
import '../../css/k/k6sa60boh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqc4kqwcp"/><path class="cx_r_q9xv"/><path class="zhgbw2bsy"/><path class="xak2o0bmu"/><path class="k6sa60boh"/>`,
		"fallback": "energy-icons:house-battery-x-20-bold",
	});
}

export default Component;
