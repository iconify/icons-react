import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5vflabdx.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5vflabdx"/>`,
		"fallback": "jam:coin-f",
	});
}

export default Component;
