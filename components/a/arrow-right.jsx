import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/homst6gcz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="homst6gcz"/>`,
		"fallback": "foundation:arrow-right",
	});
}

export default Component;
