import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/w/w8dd_zm0v.css';
import '../../css/p/p5w2crbbm.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="w8dd_zm0v"/><path class="p5w2crbbm"/></g>`,
		"fallback": "system-uicons:bell-snooze",
	});
}

export default Component;
