import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j37bt1bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j37bt1bmo"/>`,
		"fallback": "thesvg-color:99designs",
	});
}

export default Component;
