import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/dufu644xt.css';
import '../../css/g/g8g0h0bzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="dufu644xt"/><path class="g8g0h0bzl"/></g>`,
		"fallback": "matita:arrow-down",
	});
}

export default Component;
