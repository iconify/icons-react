import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y03av56rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y03av56rn"/>`,
		"fallback": "simple-icons:bmw",
	});
}

export default Component;
