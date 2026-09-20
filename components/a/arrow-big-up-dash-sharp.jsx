import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q9kk0unzu.css';
import '../../css/h/hf6_d2bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q9kk0unzu"/><path class="hf6_d2bbc"/></g>`,
		"fallback": "pixelarticons:arrow-big-up-dash-sharp",
	});
}

export default Component;
