import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgovvk22o.css';
import '../../css/y/yfpy2jban.css';
import '../../css/x/xdv2gr6mr.css';
import '../../css/r/rgnmvxbeq.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/v/vxk2fdbec.css';
import '../../css/y/ypsncrb-r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wgovvk22o"><path class="yfpy2jban"/><path class="xdv2gr6mr"/><path class="rgnmvxbeq"/></g><g class="ij2x_72vy"><path class="vxk2fdbec"/><path class="ypsncrb-r"/></g>`,
		"fallback": "openmoji:compose",
	});
}

export default Component;
