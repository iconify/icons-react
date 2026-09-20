import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex-9i5bwz.css';
import '../../css/s/sub5uvbpm.css';
import '../../css/s/s0n6_-bas.css';
import '../../css/q/qqf_skbkp.css';
import '../../css/j/j9n-wgfhi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect fill="url(#SVGigDaJbgS)" class="ex-9i5bwz"/><g clip-path="url(#SVGg3D4Hd7H)"><path clip-rule="evenodd" class="sub5uvbpm"/></g><defs><linearGradient id="SVGigDaJbgS" x1="0" x2="256" y1="0" y2="266" gradientUnits="userSpaceOnUse"><stop class="s0n6_-bas"/><stop offset="1" class="qqf_skbkp"/></linearGradient><clipPath id="SVGg3D4Hd7H"><path class="j9n-wgfhi"/></clipPath></defs></g>`,
		"fallback": "skill-icons:azul",
	});
}

export default Component;
