import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftjmqqbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftjmqqbrh"/>`,
		"fallback": "iconaut:arrow-u-turn-up-line-flip-solid",
	});
}

export default Component;
