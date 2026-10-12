import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmkjuy8tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zmkjuy8tm"/>`,
		"fallback": "lucide-extended:book-text-filled",
	});
}

export default Component;
