import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kgwyvtbhw.css';
import '../../css/a/aac11_wch.css';
import '../../css/q/q7735lbgz.css';
import '../../css/m/m5_s75beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kgwyvtbhw wm-shadow"/><path class="aac11_wch wm-shadow"/><path class="q7735lbgz"/><path class="m5_s75beb"/></g>`,
		"fallback": "withicons-brutal:avatar-dino",
	});
}

export default Component;
