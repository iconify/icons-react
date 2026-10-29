import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lkonv1d3d.css';
import '../../css/g/gkxcr3bvl.css';
import '../../css/w/wi19j-lxz.css';
import '../../css/p/pz6n94bed.css';
import '../../css/j/jfnfrsbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lkonv1d3d wm-k"/><path class="gkxcr3bvl wm-k"/><path class="wi19j-lxz wm-k"/><path class="pz6n94bed wm-a"/><path class="jfnfrsbiy wm-a"/></g>`,
		"fallback": "withicons:alert-circle-sketch",
	});
}

export default Component;
