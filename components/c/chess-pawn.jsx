import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynd4v0btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynd4v0btj"/>`,
		"fallback": "noviair:chess-pawn",
	});
}

export default Component;
