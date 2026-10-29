import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dlws71bpv.css';
import '../../css/y/yrx3e0bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dlws71bpv wm-k"/><path class="wm-s yrx3e0bfn"/></g>`,
		"fallback": "withicons-bauhaus:cloud-check",
	});
}

export default Component;
