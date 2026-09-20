import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjh72yb-u.css';
import '../../css/x/x43opxnpt.css';
import '../../css/j/jzoq35z0x.css';
import '../../css/z/zhs-aqbgk.css';
import '../../css/v/vql84yd7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hjh72yb-u"/><path class="x43opxnpt"/><path class="jzoq35z0x"/><path class="zhs-aqbgk"/><path class="vql84yd7o"/></g>`,
		"fallback": "streamline-cyber-color:croissant",
	});
}

export default Component;
