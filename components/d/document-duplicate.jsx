import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tptqvebil.css';
import '../../css/w/wzn8icbog.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tptqvebil"/><path class="wzn8icbog"/></g>`,
		"fallback": "heroicons-solid:document-duplicate",
	});
}

export default Component;
