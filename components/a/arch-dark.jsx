import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-3my0bau.css';
import '../../css/h/h7hnqcblh.css';
import '../../css/e/e0smexb9h.css';
import '../../css/d/denave-fz.css';
import '../../css/j/j15ty4b9p.css';
import '../../css/g/gmi99zbxx.css';
import '../../css/s/stui2mbih.css';
import '../../css/w/w8ra5nbxi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="m-3my0bau"/><g clip-path="url(#SVGeZMHGeag)"><path class="h7hnqcblh"/><path class="e0smexb9h"/><path fill="url(#SVGI0bIqbus)" class="denave-fz"/></g></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath><clipPath id="SVGeZMHGeag"><path class="gmi99zbxx"/></clipPath><linearGradient id="SVGI0bIqbus" x1="127.904" x2="104.123" y1="61.731" y2="133.77" gradientUnits="userSpaceOnUse"><stop class="stui2mbih"/><stop offset="1" class="w8ra5nbxi"/></linearGradient></defs></g>`,
		"fallback": "skill-icons:arch-dark",
	});
}

export default Component;
