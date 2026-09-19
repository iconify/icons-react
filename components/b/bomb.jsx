import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo8f6ub5d.css';
import '../../css/i/ibm4w8blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo8f6ub5d"/><path class="ibm4w8blz"/>`,
		"fallback": "bx:bomb",
	});
}

export default Component;
