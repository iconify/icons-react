import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gezqzx40e.css';
import '../../css/i/ilntfmbad.css';
import '../../css/l/lxiabl_as.css';
import '../../css/u/u7n5henwe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGesorYdPQ" x1="96.172" x2="97.019" y1="-61.005" y2="-61.005" gradientTransform="rotate(30 -132207.168 -420369.601)scale(2004.5664)" gradientUnits="userSpaceOnUse"><stop offset="0" class="gezqzx40e"/><stop offset="1" class="ilntfmbad"/></linearGradient><path fill="url(#SVGesorYdPQ)" class="lxiabl_as"/><linearGradient id="SVGgidYwe3i" x1="96.169" x2="97.016" y1="-60.985" y2="-60.985" gradientTransform="rotate(30 -132207.168 -420369.601)scale(2004.5664)" gradientUnits="userSpaceOnUse"><stop offset="0" class="gezqzx40e"/><stop offset="1" class="ilntfmbad"/></linearGradient><path fill="url(#SVGgidYwe3i)" class="u7n5henwe"/>`,
		"fallback": "selfhst:fladder",
	});
}

export default Component;
