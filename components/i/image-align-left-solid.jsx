import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikea9glqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikea9glqg"/>`,
		"fallback": "iconaut:image-align-left-solid",
	});
}

export default Component;
