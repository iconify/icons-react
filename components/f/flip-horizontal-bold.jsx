import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpomyibzb.css';
import '../../css/q/q5txpcciu.css';
import '../../css/w/wumnombuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hpomyibzb"/><path class="q5txpcciu"/><path clip-rule="evenodd" class="wumnombuq"/></g>`,
		"fallback": "solar:flip-horizontal-bold",
	});
}

export default Component;
