import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w28ioxlaz.css';
import '../../css/j/j85cgdb0i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w28ioxlaz"/><path clip-rule="evenodd" class="j85cgdb0i"/></g>`,
		"fallback": "heroicons-solid:credit-card",
	});
}

export default Component;
