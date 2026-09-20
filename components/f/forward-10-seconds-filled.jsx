import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5zlkdb6w.css';
import '../../css/c/cwy2l1b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v5zlkdb6w"/><path class="cwy2l1b2x"/></g>`,
		"fallback": "reicon:forward-10-seconds-filled",
	});
}

export default Component;
