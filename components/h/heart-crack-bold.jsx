import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u726vv-jj.css';
import '../../css/s/sr1v0klsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u726vv-jj"/><path class="sr1v0klsj"/></g>`,
		"fallback": "solar:heart-crack-bold",
	});
}

export default Component;
