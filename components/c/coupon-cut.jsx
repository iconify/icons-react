import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/us1ramwyc.css';
import '../../css/z/z-2d3rbuj.css';
import '../../css/l/l-93c6bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="us1ramwyc"/><path class="z-2d3rbuj"/><path class="l-93c6bso"/></g>`,
		"fallback": "streamline-freehand:coupon-cut",
	});
}

export default Component;
