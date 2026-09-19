import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5vgbcb_s.css';
import '../../css/v/vmyfv_bvg.css';
import '../../css/w/wgqpd53tm.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5vgbcb_s"/><path class="vmyfv_bvg"/><path class="wgqpd53tm"/>`,
		"fallback": "flag:gp-4x3",
	});
}

export default Component;
