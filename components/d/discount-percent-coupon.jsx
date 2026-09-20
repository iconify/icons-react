import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uijog0b2y.css';
import '../../css/d/d4v5xjb6t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uijog0b2y"/><path class="d4v5xjb6t"/></g>`,
		"fallback": "streamline:discount-percent-coupon",
	});
}

export default Component;
