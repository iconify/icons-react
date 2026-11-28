import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j700q7u0r.css';
import '../../css/r/rnaq8wbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j700q7u0r"/><path class="rnaq8wbzn"/></g>`,
		"fallback": "iconaut:candle-solid",
	});
}

export default Component;
