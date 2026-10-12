import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj8zh9bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wj8zh9bxj"/>`,
		"fallback": "lucide-extended:book-type-filled",
	});
}

export default Component;
