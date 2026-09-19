import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6y3f0b6q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6y3f0b6q"/>`,
		"fallback": "carbon:chevron-left",
	});
}

export default Component;
