import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0z7hiqqw.css';
import '../../css/i/i8df7b9um.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i0z7hiqqw"/><path class="i8df7b9um"/></g>`,
		"fallback": "reicon:desktop-arrow-down-filled",
	});
}

export default Component;
