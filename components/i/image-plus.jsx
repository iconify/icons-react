import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f8le2jbey.css';
import '../../css/o/ol5--vb1y.css';
import '../../css/t/t10685b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f8le2jbey"/><path clip-rule="evenodd" class="ol5--vb1y"/><path class="t10685b9q"/></g>`,
		"fallback": "reicon:image-plus",
	});
}

export default Component;
