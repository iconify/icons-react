import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7qer0kun.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7qer0kun"/>`,
		"fallback": "whh:cuckooclock",
	});
}

export default Component;
