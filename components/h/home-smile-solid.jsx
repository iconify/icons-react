import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-di8ibbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-di8ibbh"/>`,
		"fallback": "mynaui:home-smile-solid",
	});
}

export default Component;
