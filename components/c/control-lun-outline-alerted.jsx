import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1-rs1b4l.css';
import '../../css/f/fizwjlb_d.css';
import '../../css/f/fs962mxrf.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1-rs1b4l"/><path class="fizwjlb_d"/><path class="fs962mxrf"/>`,
		"fallback": "clarity:control-lun-outline-alerted",
	});
}

export default Component;
