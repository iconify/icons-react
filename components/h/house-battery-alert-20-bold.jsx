import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqc4kqwcp.css';
import '../../css/c/cx_r_q9xv.css';
import '../../css/z/zhgbw2bsy.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqc4kqwcp"/><path class="cx_r_q9xv"/><path class="zhgbw2bsy"/><path class="jeyqzjnhx"/>`,
		"fallback": "energy-icons:house-battery-alert-20-bold",
	});
}

export default Component;
