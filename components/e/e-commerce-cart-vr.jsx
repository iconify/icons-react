import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xoazu-hon.css';
import '../../css/c/cg6icibsc.css';
import '../../css/k/knvapgc9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xoazu-hon"/><path class="cg6icibsc"/><path class="knvapgc9x"/></g>`,
		"fallback": "streamline-freehand:e-commerce-cart-vr",
	});
}

export default Component;
