import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcjni6bfe.css';
import '../../css/l/l1q0m9wzl.css';
import '../../css/f/f8mck9vds.css';
import '../../css/n/nh_zuobhi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGx2hxfd8n" x1="256" x2="256" y1="789.022" y2="290.041" gradientTransform="translate(0 -279)" gradientUnits="userSpaceOnUse"><stop offset="0" class="rcjni6bfe"/><stop offset="1" class="l1q0m9wzl"/></linearGradient><path fill="url(#SVGx2hxfd8n)" class="f8mck9vds"/><path class="nh_zuobhi"/>`,
		"fallback": "selfhst:apple-music",
	});
}

export default Component;
