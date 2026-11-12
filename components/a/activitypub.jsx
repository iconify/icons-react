import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2cm4uj8a.css';
import '../../css/r/r8b1kxb7v.css';
import '../../css/u/upbz7vs7g.css';
import '../../css/z/zf3wxcugu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGDkeRGeYi" x1="3822.6" x2="3837.4" y1="256.1" y2="256.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="q2cm4uj8a"/><stop offset="1"/></linearGradient><path fill="url(#SVGDkeRGeYi)" class="r8b1kxb7v"/><linearGradient id="SVGOv8rFe0Z" x1="-.1" x2="227.7" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="upbz7vs7g"/><stop offset="1"/></linearGradient><path fill="url(#SVGOv8rFe0Z)" class="zf3wxcugu"/>`,
		"fallback": "selfhst:activitypub",
	});
}

export default Component;
