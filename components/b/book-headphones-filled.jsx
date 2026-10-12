import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hford7bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hford7bnm"/>`,
		"fallback": "lucide-extended:book-headphones-filled",
	});
}

export default Component;
