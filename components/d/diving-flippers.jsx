import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6l7bxb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6l7bxb-f"/>`,
		"fallback": "mdi:diving-flippers",
	});
}

export default Component;
