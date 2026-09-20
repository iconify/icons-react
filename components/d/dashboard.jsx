import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hng5s4j4p.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hng5s4j4p"/>`,
		"fallback": "iwwa:dashboard",
	});
}

export default Component;
