import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iv8mq4p-u.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/w/w1_fj6bpp.css';
import '../../css/q/qv7s7bn6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="iv8mq4p-u wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="w1_fj6bpp wm-k"/><path class="qv7s7bn6a wm-a"/></g>`,
		"fallback": "withicons:ghost-blueprint",
	});
}

export default Component;
