import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogygfci6p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogygfci6p"/>`,
		"fallback": "la:chess-king-solid",
	});
}

export default Component;
