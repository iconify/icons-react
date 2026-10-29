import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hm38-ccpa.css';
import '../../css/f/f3tg6ebbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hm38-ccpa"/><path class="f3tg6ebbt wm-a"/></g>`,
		"fallback": "withicons:ethernet-port",
	});
}

export default Component;
