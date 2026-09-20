import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3oek9bzm.css';
import '../../css/l/luu9apbcm.css';
import '../../css/m/md7edy7iy.css';
import '../../css/s/s9mdvibkx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3oek9bzm"/><path class="luu9apbcm"/><path class="md7edy7iy"/><path class="s9mdvibkx"/></g>`,
		"fallback": "streamline-flex-color:chat-bubble-square-phone",
	});
}

export default Component;
