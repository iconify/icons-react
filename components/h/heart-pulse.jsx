import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/qefm7i10w.css';
import '../../css/c/c1ngihbza.css';
import '../../css/v/vk3fxac9c.css';
import '../../css/d/doakfhb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZKFl8qTw" x1="9" x2="15" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGZKFl8qTw)" class="qefm7i10w"/><path class="c1ngihbza wm-shine"/><path class="vk3fxac9c wm-shine"/><path class="doakfhb-t wm-shine"/></g>`,
		"fallback": "withicons-utsav:heart-pulse",
	});
}

export default Component;
