import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxifirbbl.css';
import '../../css/r/ryxm1nv_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxifirbbl"/><path class="ryxm1nv_k"/>`,
		"fallback": "streamline-ultimate:e-commerce-touch-buy-bold",
	});
}

export default Component;
