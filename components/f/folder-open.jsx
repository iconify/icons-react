import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yug4pobyp.css';
import '../../css/p/pebidofke.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yug4pobyp"/><path class="pebidofke"/></g>`,
		"fallback": "heroicons-solid:folder-open",
	});
}

export default Component;
