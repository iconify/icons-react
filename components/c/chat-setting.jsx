import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q4mt3qbpl.css';
import '../../css/e/e1ga06blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q4mt3qbpl"/><path class="e1ga06blp"/></g>`,
		"fallback": "tdesign:chat-setting",
	});
}

export default Component;
