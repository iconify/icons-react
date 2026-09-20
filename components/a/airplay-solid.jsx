import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j2keu9btr.css';
import '../../css/m/mm8dvxbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j2keu9btr"/><path class="mm8dvxbqy"/></g>`,
		"fallback": "mynaui:airplay-solid",
	});
}

export default Component;
