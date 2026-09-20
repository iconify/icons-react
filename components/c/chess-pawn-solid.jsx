import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rca1_3t3r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rca1_3t3r"/>`,
		"fallback": "la:chess-pawn-solid",
	});
}

export default Component;
