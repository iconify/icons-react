import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmk-q3y2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmk-q3y2h"/>`,
		"fallback": "withicons:eraser-gloss",
	});
}

export default Component;
