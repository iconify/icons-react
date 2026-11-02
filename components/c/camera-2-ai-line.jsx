import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4lljcc7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4lljcc7o"/>`,
		"fallback": "mingcute:camera-2-ai-line",
	});
}

export default Component;
