import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8lx0vbrj.css';
import '../../css/v/vy0ldfbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8lx0vbrj"/><path class="vy0ldfbhv"/>`,
		"fallback": "token:atlas",
	});
}

export default Component;
