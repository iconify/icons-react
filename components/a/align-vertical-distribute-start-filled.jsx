import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0m6_7bfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0m6_7bfb"/>`,
		"fallback": "lucide-extended:align-vertical-distribute-start-filled",
	});
}

export default Component;
