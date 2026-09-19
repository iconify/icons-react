import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/y/yoskqcbdm.css';
import '../../css/i/ipxyt99db.css';
import '../../css/a/a8xxc-agh.css';
import '../../css/r/rox8-9b8s.css';
import '../../css/s/sj6eksbcv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am770-rkn"/><path class="yoskqcbdm"/><rect class="ipxyt99db"/><path class="a8xxc-agh"/><rect class="rox8-9b8s"/><path class="sj6eksbcv"/></g>`,
		"fallback": "glyphs-poly:flushed",
	});
}

export default Component;
