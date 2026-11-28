import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/inqpjab-q.css';
import '../../css/u/u5lsurbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="inqpjab-q"/><path class="u5lsurbhx"/></g>`,
		"fallback": "iconaut:battery-empty-solid",
	});
}

export default Component;
