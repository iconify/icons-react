import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxaai3bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxaai3bkd"/>`,
		"fallback": "lucide:code-2",
	});
}

export default Component;
