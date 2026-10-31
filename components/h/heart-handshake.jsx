import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wywwhbceh.css';
import '../../css/y/yg01__zth.css';
import '../../css/w/wvj8775ac.css';
import '../../css/v/v9nf4j88k.css';
import '../../css/p/pp32j-bjw.css';
import '../../css/l/la-ln5z0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wywwhbceh"/><path class="yg01__zth"/><path class="wvj8775ac"/><path class="v9nf4j88k"/><path class="pp32j-bjw"/><path class="la-ln5z0d"/></g>`,
		"fallback": "withicons-retro:heart-handshake",
	});
}

export default Component;
