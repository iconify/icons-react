import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0kugvb-z.css';
import '../../css/j/jz4oqrb2p.css';
import '../../css/m/mj_1gqlha.css';
import '../../css/b/baci3xbir.css';
import '../../css/c/craiambys.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGYoyZO3iz" x1="218" x2="62.8" y1="434.2" y2="434.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="m0kugvb-z"/><stop offset="1" class="jz4oqrb2p"/></linearGradient><path fill="url(#SVGYoyZO3iz)" class="mj_1gqlha"/><linearGradient id="SVG6Ra61dlB" x1="450.9" x2="62.8" y1="253.6" y2="257.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="m0kugvb-z"/><stop offset="1" class="jz4oqrb2p"/></linearGradient><path fill="url(#SVG6Ra61dlB)" class="baci3xbir"/><linearGradient id="SVG7FaNncnZ" x1="450.9" x2="62.8" y1="75.6" y2="79.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m0kugvb-z"/><stop offset="1" class="jz4oqrb2p"/></linearGradient><path fill="url(#SVG7FaNncnZ)" class="craiambys"/>`,
		"fallback": "selfhst:formbricks",
	});
}

export default Component;
