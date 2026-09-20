import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr__skb2i.css';
import '../../css/e/ek3d--bzq.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/w/w5srz5bvt.css';
import '../../css/n/ne0fmbx4f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr__skb2i"/><path class="ek3d--bzq"/><g class="ij2x_72vy"><path class="w5srz5bvt"/><path class="ne0fmbx4f"/></g>`,
		"fallback": "openmoji:clamp",
	});
}

export default Component;
