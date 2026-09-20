import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8t6tvb-m.css';
import '../../css/q/q638sm-ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z8t6tvb-m"/><path class="q638sm-ta"/></g>`,
		"fallback": "pixelarticons:book-open-sharp",
	});
}

export default Component;
