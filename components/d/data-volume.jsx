import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on92ny6gr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on92ny6gr"/>`,
		"fallback": "carbon:data-volume",
	});
}

export default Component;
