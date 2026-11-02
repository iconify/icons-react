import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfj70_hgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfj70_hgl"/>`,
		"fallback": "mingcute:electric-cooker-line",
	});
}

export default Component;
