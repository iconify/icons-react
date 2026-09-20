import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ioqeb7b7x.css';
import '../../css/t/tv6didc9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ioqeb7b7x"/><path class="tv6didc9e"/></g>`,
		"fallback": "reicon:hearts-filled",
	});
}

export default Component;
