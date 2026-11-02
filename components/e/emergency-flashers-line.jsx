import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owm-0ybmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owm-0ybmj"/>`,
		"fallback": "mingcute:emergency-flashers-line",
	});
}

export default Component;
