import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8tk9cbtx.css';
import '../../css/x/x-6wslbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary v8tk9cbtx"/><path class="primary x-6wslbxi"/></g>`,
		"fallback": "iconaut:border-right-duotone",
	});
}

export default Component;
