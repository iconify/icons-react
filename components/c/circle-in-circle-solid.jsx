import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fohl8kb7k.css';
import '../../css/c/c148m5b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fohl8kb7k"/><path class="c148m5b9c"/></g>`,
		"fallback": "nrk:circle-in-circle-solid",
	});
}

export default Component;
