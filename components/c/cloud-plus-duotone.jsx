import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j9siqcb1a.css';
import '../../css/m/m-_4vigdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j9siqcb1a"/><path clip-rule="evenodd" class="m-_4vigdq"/></g>`,
		"fallback": "reicon:cloud-plus-duotone",
	});
}

export default Component;
