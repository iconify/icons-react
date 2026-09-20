import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-o_3jm7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-o_3jm7k"/>`,
		"fallback": "mynaui:a-arrow-down",
	});
}

export default Component;
