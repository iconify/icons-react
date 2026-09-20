import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp935pb2i.css';
import '../../css/c/ca5grhk1u.css';
import '../../css/n/nw9d4_b1h.css';
import '../../css/y/yj7wg2bbf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGRfIQhcUt" cx="256" cy="256" r="255.23" gradientUnits="userSpaceOnUse"><stop offset="0" class="sp935pb2i"/><stop offset=".1" class="sp935pb2i"/><stop offset=".5" class="ca5grhk1u"/><stop offset="1" class="nw9d4_b1h"/></radialGradient><path fill="url(#SVGRfIQhcUt)" class="yj7wg2bbf"/>`,
		"fallback": "selfhst:instagram-reels",
	});
}

export default Component;
