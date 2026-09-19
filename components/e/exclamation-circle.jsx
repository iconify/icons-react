import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daobr4a-u.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daobr4a-u"/>`,
		"fallback": "fa:exclamation-circle",
	});
}

export default Component;
