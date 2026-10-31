import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/je89occrh.css';
import '../../css/o/ogx7keb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="je89occrh"/><path class="ogx7keb2j"/></g>`,
		"fallback": "coolicons:cat-bulk-round",
	});
}

export default Component;
