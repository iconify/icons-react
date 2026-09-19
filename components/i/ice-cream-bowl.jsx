import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pnr685b4k.css';
import '../../css/k/ktcd19tof.css';
import '../../css/t/t0lzcmb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pnr685b4k"/><path class="ktcd19tof"/><path class="t0lzcmb5w"/></g>`,
		"fallback": "hugeicons:ice-cream-bowl",
	});
}

export default Component;
