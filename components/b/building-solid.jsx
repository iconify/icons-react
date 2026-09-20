import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mz-vh0bdu.css';
import '../../css/h/h4y6p29us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mz-vh0bdu"/><path class="h4y6p29us"/></g>`,
		"fallback": "mynaui:building-solid",
	});
}

export default Component;
