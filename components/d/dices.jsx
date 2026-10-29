import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pk11pab5e.css';
import '../../css/k/kye7fgb5m.css';
import '../../css/o/oxol8u2xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pk11pab5e"/><path class="kye7fgb5m wm-a"/><path class="oxol8u2xx"/></g>`,
		"fallback": "withicons:dices",
	});
}

export default Component;
