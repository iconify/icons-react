import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8j6vh2mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o8j6vh2mv"/>`,
		"fallback": "mingcute:baseball-2-fill",
	});
}

export default Component;
