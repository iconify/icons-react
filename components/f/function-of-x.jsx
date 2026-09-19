import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y3g0aibte.css';
import '../../css/f/f_6w66b_f.css';
import '../../css/k/k7uvfrbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y3g0aibte"/><path class="f_6w66b_f"/><path class="k7uvfrbwe"/></g>`,
		"fallback": "hugeicons:function-of-x",
	});
}

export default Component;
