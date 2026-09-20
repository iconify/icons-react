import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5kdsjbsk.css';
import '../../css/w/wl2vi-wfs.css';
import '../../css/p/ph-mjcb4f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5kdsjbsk"/><path class="wl2vi-wfs"/><path class="ph-mjcb4f"/>`,
		"fallback": "openmoji:black-rectangle",
	});
}

export default Component;
