import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e6-9olbni.css';
import '../../css/j/jc8b76b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e6-9olbni"/><path class="jc8b76b4l"/></g>`,
		"fallback": "reicon:file-up-filled",
	});
}

export default Component;
