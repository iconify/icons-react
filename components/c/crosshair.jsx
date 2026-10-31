import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k2tmhbc7k.css';
import '../../css/y/y7idnesla.css';
import '../../css/r/rry1ebbww.css';
import '../../css/b/boyaabb0s.css';
import '../../css/p/p6obix_ad.css';
import '../../css/c/cdn0l8bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k2tmhbc7k wm-shadow"/><path class="y7idnesla"/><path class="rry1ebbww"/><path class="boyaabb0s"/><path class="p6obix_ad"/><path class="cdn0l8bbg"/></g>`,
		"fallback": "withicons-retro:crosshair",
	});
}

export default Component;
