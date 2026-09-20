import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wn8ltlbkj.css';
import '../../css/x/x1va69ceo.css';
import '../../css/f/fe0lorb6j.css';
import '../../css/g/gewiseacf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wn8ltlbkj"/><path clip-rule="evenodd" class="x1va69ceo"/><path clip-rule="evenodd" class="fe0lorb6j"/><path clip-rule="evenodd" class="gewiseacf"/></g>`,
		"fallback": "solar:cart-large-outline",
	});
}

export default Component;
