import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8o8gmbxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8o8gmbxl"/>`,
		"fallback": "la:envelope-square-solid",
	});
}

export default Component;
