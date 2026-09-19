import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpg7d3bmh.css';
import '../../css/y/y5ddx5bxl.css';
import '../../css/d/dpyh8qbwd.css';
import '../../css/z/zj6qtd6in.css';
import '../../css/e/e6hp4ybxq.css';
import '../../css/f/fqlvp8b_k.css';
import '../../css/p/pyz1rwb5o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpg7d3bmh"/><path class="y5ddx5bxl"/><path class="dpyh8qbwd"/><path class="zj6qtd6in"/><path class="e6hp4ybxq"/><path class="fqlvp8b_k"/><path class="pyz1rwb5o"/>`,
		"fallback": "fxemoji:curryandrice",
	});
}

export default Component;
