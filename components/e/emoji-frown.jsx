import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qh4l7r3-i.css';
import '../../css/t/tk3k4fb_w.css';
import '../../css/i/i73u7ccvd.css';
import '../../css/h/hh34r8rul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qh4l7r3-i"/><circle class="tk3k4fb_w"/><circle class="i73u7ccvd"/><path class="hh34r8rul"/></g>`,
		"fallback": "proicons:emoji-frown",
	});
}

export default Component;
