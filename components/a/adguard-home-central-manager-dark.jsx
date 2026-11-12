import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx32gdm7x.css';
import '../../css/a/algf38bxk.css';
import '../../css/t/tbxz3xbtt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGu2Rgje2r" x1="18.6" x2="534.7" y1="-27.8" y2="488.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="qx32gdm7x"/><stop offset="1"/></linearGradient><path fill="url(#SVGu2Rgje2r)" class="algf38bxk"/><path class="tbxz3xbtt"/>`,
		"fallback": "selfhst:adguard-home-central-manager-dark",
	});
}

export default Component;
