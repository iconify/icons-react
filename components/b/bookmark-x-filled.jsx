import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4-1nacqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t4-1nacqj"/>`,
		"fallback": "lucide-extended:bookmark-x-filled",
	});
}

export default Component;
