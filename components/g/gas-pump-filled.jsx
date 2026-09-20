import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q8kq6gcik.css';
import '../../css/j/jvezz4bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q8kq6gcik"/><path class="jvezz4bhh"/></g>`,
		"fallback": "reicon:gas-pump-filled",
	});
}

export default Component;
