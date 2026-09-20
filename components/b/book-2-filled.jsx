import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m-i6bgbut.css';
import '../../css/l/lqw7f9bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m-i6bgbut"/><path class="lqw7f9bwh"/></g>`,
		"fallback": "reicon:book-2-filled",
	});
}

export default Component;
