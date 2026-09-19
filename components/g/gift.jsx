import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iol3lcl0r.css';
import '../../css/c/ca0b8gbic.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iol3lcl0r"/><path class="ca0b8gbic"/></g>`,
		"fallback": "et:gift",
	});
}

export default Component;
