import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qh4l7r3-i.css';
import '../../css/k/kne5kebtp.css';
import '../../css/p/p9kwgybhy.css';
import '../../css/o/ox5n37b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qh4l7r3-i"/><circle class="kne5kebtp"/><circle class="p9kwgybhy"/><path class="ox5n37b4e"/></g>`,
		"fallback": "proicons:emoji-grin",
	});
}

export default Component;
