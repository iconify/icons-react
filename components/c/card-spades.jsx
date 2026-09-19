import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hi2jxbbxg.css';
import '../../css/j/ja8ylmbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hi2jxbbxg"/><path clip-rule="evenodd" class="ja8ylmbub"/></g>`,
		"fallback": "gg:card-spades",
	});
}

export default Component;
