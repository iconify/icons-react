import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiww6dmoc.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7inorjqj.css';
import '../../css/o/o11gx5bhr.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiww6dmoc"/><g class="cuyn6tgcc"><path class="v7inorjqj"/><path class="o11gx5bhr"/></g>`,
		"fallback": "iwwa:calendar",
	});
}

export default Component;
