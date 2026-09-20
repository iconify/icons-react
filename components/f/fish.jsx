import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7r761b1q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7r761b1q"/>`,
		"fallback": "la:fish",
	});
}

export default Component;
