import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln6t4lble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ln6t4lble"/>`,
		"fallback": "griddy-icons:hacker",
	});
}

export default Component;
