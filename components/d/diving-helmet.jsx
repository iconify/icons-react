import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5ucwkfly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5ucwkfly"/>`,
		"fallback": "mdi:diving-helmet",
	});
}

export default Component;
