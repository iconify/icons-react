import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/urc5ue4jr.css';
import '../../css/h/h3lwipb0h.css';
import '../../css/c/ce3b4y7bf.css';
import '../../css/p/pi6wd7bqh.css';
import '../../css/e/e5q6nznvv.css';
import '../../css/x/x2je1dw0q.css';
import '../../css/z/zxxxt7bqz.css';
import '../../css/m/my5268blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="urc5ue4jr"/><path class="h3lwipb0h"/><path class="ce3b4y7bf"/><path class="pi6wd7bqh"/><path class="e5q6nznvv"/><path class="x2je1dw0q"/><path class="zxxxt7bqz"/><path class="my5268blj"/></g>`,
		"fallback": "solar:clipboard-list-line-duotone",
	});
}

export default Component;
