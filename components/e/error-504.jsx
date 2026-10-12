import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n0_irvk_b.css';
import '../../css/x/xp8ikm1ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="n0_irvk_b"/><path class="xp8ikm1ai"/></g>`,
		"fallback": "andrsrxn:error-504",
	});
}

export default Component;
