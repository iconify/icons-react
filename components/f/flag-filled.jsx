import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae-x9bbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae-x9bbak"/>`,
		"fallback": "lucide-extended:flag-filled",
	});
}

export default Component;
