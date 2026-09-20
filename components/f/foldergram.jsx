import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-3knu0fx.css';
import '../../css/v/v4vyuabuo.css';
import '../../css/n/n4x3occyp.css';
import '../../css/s/s69o1ib8n.css';
import '../../css/q/qr48up8bl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGMhhfWdCG" x1="80" x2="432" y1="450" y2="66" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="k-3knu0fx"/><stop offset="1" class="v4vyuabuo"/></linearGradient><path fill="url(#SVGMhhfWdCG)" class="n4x3occyp"/><path class="s69o1ib8n"/><path class="qr48up8bl"/>`,
		"fallback": "selfhst:foldergram",
	});
}

export default Component;
