import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/joh6l_5ax.css';
import '../../css/o/o6p8fgbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="joh6l_5ax"/><path class="o6p8fgbyk"/></g>`,
		"fallback": "reicon:directbox-send-filled",
	});
}

export default Component;
