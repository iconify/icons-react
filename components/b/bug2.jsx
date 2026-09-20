import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i8_uwdc3t.css';
import '../../css/n/n1es83ios.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i8_uwdc3t"/><path clip-rule="evenodd" class="n1es83ios"/></g>`,
		"fallback": "reicon:bug2",
	});
}

export default Component;
