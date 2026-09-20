import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywq3k2bvi.css';
import '../../css/o/o6t310ynt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ywq3k2bvi"/><path class="o6t310ynt"/></g>`,
		"fallback": "mynaui:ampersand-square-solid",
	});
}

export default Component;
