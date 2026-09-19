import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed5q7mbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed5q7mbuj"/>`,
		"fallback": "cbi:chicken-coup-door-shut",
	});
}

export default Component;
