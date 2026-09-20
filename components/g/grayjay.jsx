import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osuu9xk0d.css';
import '../../css/i/i1hp0t7mm.css';
import '../../css/j/jy06qjpia.css';
import '../../css/i/i21-bvbac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGJutDUbFg" x1="256" x2="256" y1="754.393" y2="231.564" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="osuu9xk0d"/><stop offset="1" class="i1hp0t7mm"/></linearGradient><path fill="url(#SVGJutDUbFg)" class="jy06qjpia"/><path class="i21-bvbac"/>`,
		"fallback": "selfhst:grayjay",
	});
}

export default Component;
