import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h4umnu5lv.css';
import '../../css/e/earr4i8do.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h4umnu5lv"/><path clip-rule="evenodd" class="earr4i8do"/></g>`,
		"fallback": "sidekickicons:headphones-slash-20-solid",
	});
}

export default Component;
