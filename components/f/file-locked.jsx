import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_9rv5rhc.css';
import '../../css/w/w4w65tb6p.css';
import '../../css/n/nee9bt-sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_9rv5rhc"/><path class="w4w65tb6p"/><path class="nee9bt-sy"/></g>`,
		"fallback": "tdesign:file-locked",
	});
}

export default Component;
