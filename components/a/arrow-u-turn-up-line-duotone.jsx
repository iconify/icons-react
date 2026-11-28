import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h8qmjobhl.css';
import '../../css/s/sbtlifb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h8qmjobhl secondary"/><path class="primary sbtlifb4w"/></g>`,
		"fallback": "iconaut:arrow-u-turn-up-line-duotone",
	});
}

export default Component;
