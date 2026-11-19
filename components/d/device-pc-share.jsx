import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vg--e1irl.css';
import '../../css/x/x8jzd0bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vg--e1irl"/><path class="x8jzd0bku"/></g>`,
		"fallback": "andrsrxn:device-pc-share",
	});
}

export default Component;
