import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqjd1kb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sqjd1kb9y"/>`,
		"fallback": "lucide-extended:broccoli-filled",
	});
}

export default Component;
