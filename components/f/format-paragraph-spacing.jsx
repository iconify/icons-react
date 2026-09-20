import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en0no1b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en0no1b3o"/>`,
		"fallback": "mdi:format-paragraph-spacing",
	});
}

export default Component;
