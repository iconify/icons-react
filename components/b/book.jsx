import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cl5xc3tem.css';
import '../../css/f/fegnn0rbv.css';
import '../../css/z/z0jigmbva.css';
import '../../css/b/b_g1ylbow.css';
import '../../css/n/n8u24ibpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cl5xc3tem wm-shadow"/><path class="fegnn0rbv"/><path class="z0jigmbva"/><path class="b_g1ylbow"/><path class="n8u24ibpd"/></g>`,
		"fallback": "withicons-retro:book",
	});
}

export default Component;
