import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpu92h-yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpu92h-yo"/>`,
		"fallback": "iconaut:chess-pawn-solid",
	});
}

export default Component;
