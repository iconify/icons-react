import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebo8usbwm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s4n8z_bgd.css';
import '../../css/e/e9v8jcb4j.css';
import '../../css/z/zopl36bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebo8usbwm secondary"/><g class="dt0cm9dhy primary"><path class="s4n8z_bgd"/><path class="e9v8jcb4j"/><path class="zopl36bmx"/></g>`,
		"fallback": "iconaut:check-circle-sparkles-duo",
	});
}

export default Component;
