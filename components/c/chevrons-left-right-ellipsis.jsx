import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q80-_p5dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q80-_p5dh"/>`,
		"fallback": "lucide:chevrons-left-right-ellipsis",
	});
}

export default Component;
