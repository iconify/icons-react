import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf4xfdbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf4xfdbga"/>`,
		"fallback": "mynaui:book-check-solid",
	});
}

export default Component;
