import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5tq3cbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5tq3cbwl"/>`,
		"fallback": "mingcute:columns-3-cog-fill",
	});
}

export default Component;
