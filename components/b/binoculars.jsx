import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/ufbkp1o2p.css';
import '../../css/a/a4qgpwpds.css';
import '../../css/v/vvjhu6bdl.css';
import '../../css/q/qpocdfbxt.css';
import '../../css/h/hb1dqowux.css';
import '../../css/i/i7ssbibvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDL2QZdXt" x1="10" x2="14" y1="4.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ufbkp1o2p wm-k"/><path class="a4qgpwpds wm-deco"/><path fill="url(#SVGDL2QZdXt)" class="vvjhu6bdl wm-k"/><path class="qpocdfbxt wm-shadow"/><path class="hb1dqowux wm-shine"/><path class="i7ssbibvh wm-shine"/></g>`,
		"fallback": "withicons-valentine:binoculars",
	});
}

export default Component;
