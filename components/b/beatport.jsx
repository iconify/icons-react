import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdy0rb19w.css';
import '../../css/j/jw8cvyb2l.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pdy0rb19w"/><path class="jw8cvyb2l"/></g>`,
		"fallback": "jam:beatport",
	});
}

export default Component;
