import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9z807bge.css';

const viewBox = {"width":1024,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9z807bge"/>`,
		"fallback": "whh:chevrondown",
	});
}

export default Component;
