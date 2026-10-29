import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mi6_62o3d.css';
import '../../css/u/u_ak17bik.css';
import '../../css/v/vcd_rabzn.css';
import '../../css/f/f88le3b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mi6_62o3d wm-k"/><path class="u_ak17bik wm-k"/><path class="vcd_rabzn wm-a"/><path class="f88le3b-k wm-a"/></g>`,
		"fallback": "withicons:chevron-last-sketch",
	});
}

export default Component;
