import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxdmc1b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxdmc1b5q"/>`,
		"fallback": "mdi:fridge-top",
	});
}

export default Component;
