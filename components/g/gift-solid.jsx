import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jcy36hwhw.css';
import '../../css/t/tqzoi9y-j.css';
import '../../css/f/fzeiltayl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jcy36hwhw"/><path class="tqzoi9y-j"/><path class="fzeiltayl"/></g>`,
		"fallback": "iconaut:gift-solid",
	});
}

export default Component;
