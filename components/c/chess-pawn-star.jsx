import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inykoi9lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inykoi9lh"/>`,
		"fallback": "noviair:chess-pawn-star",
	});
}

export default Component;
