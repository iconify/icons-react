import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8g1rbcqn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8g1rbcqn"/>`,
		"fallback": "whh:braces",
	});
}

export default Component;
