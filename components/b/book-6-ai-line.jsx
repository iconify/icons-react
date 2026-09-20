import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a04ndx8hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a04ndx8hk"/>`,
		"fallback": "mingcute:book-6-ai-line",
	});
}

export default Component;
