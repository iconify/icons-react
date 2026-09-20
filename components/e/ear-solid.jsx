import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r6430fbls.css';
import '../../css/q/qa8zjwb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r6430fbls"/><path class="qa8zjwb3m"/></g>`,
		"fallback": "mynaui:ear-solid",
	});
}

export default Component;
