import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3-c3wbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3-c3wbwa"/>`,
		"fallback": "lucide-extended:book-open-filled",
	});
}

export default Component;
