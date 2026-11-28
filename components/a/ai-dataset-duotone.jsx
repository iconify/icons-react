import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1jjc2b4y.css';
import '../../css/y/y-wmtuf2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1jjc2b4y secondary"/><path class="primary y-wmtuf2f"/></g>`,
		"fallback": "iconaut:ai-dataset-duotone",
	});
}

export default Component;
