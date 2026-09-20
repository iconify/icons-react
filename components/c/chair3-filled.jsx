import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/adbhafbdp.css';
import '../../css/d/d91ohvb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="adbhafbdp"/><path class="d91ohvb8h"/></g>`,
		"fallback": "reicon:chair3-filled",
	});
}

export default Component;
