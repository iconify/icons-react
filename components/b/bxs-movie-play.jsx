import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzi44cbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzi44cbca"/>`,
		"fallback": "bx:bxs-movie-play",
	});
}

export default Component;
