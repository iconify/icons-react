import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pk9_ohb1s.css';
import '../../css/q/q8prb2btj.css';
import '../../css/v/vhfgw5-us.css';
import '../../css/l/lecpydg2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pk9_ohb1s"/><path class="q8prb2btj"/><path class="vhfgw5-us"/><path class="lecpydg2p"/></g>`,
		"fallback": "iconoir:arc-3d-center-point",
	});
}

export default Component;
