import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p2cye_bni.css';
import '../../css/f/frp-jmyed.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p2cye_bni"/><path class="frp-jmyed"/></g>`,
		"fallback": "streamline:food-drinks-teapot-tea-pot-drink-hot-herb",
	});
}

export default Component;
