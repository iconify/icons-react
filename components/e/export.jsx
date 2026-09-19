import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4s7seblx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4s7seblx"/>`,
		"fallback": "whh:export",
	});
}

export default Component;
