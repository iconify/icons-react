import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stui2mbih.css';
import '../../css/b/bzk26nqsg.css';
import '../../css/l/llcf3srjo.css';
import '../../css/g/g_oyv7tku.css';
import '../../css/y/y113rzbyl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGMmirQbjb" x1="42493.566" x2="42611.074" y1="-6890.73" y2="-6656.222" gradientTransform="translate(-59261.773 9783.326)scale(1.4006)" gradientUnits="userSpaceOnUse"><stop offset="0" class="stui2mbih"/><stop offset=".495" class="bzk26nqsg"/><stop offset="1" class="llcf3srjo"/></linearGradient><path fill="url(#SVGMmirQbjb)" class="g_oyv7tku"/><path class="y113rzbyl"/>`,
		"fallback": "selfhst:codeberg",
	});
}

export default Component;
