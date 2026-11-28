import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6yti7l8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6yti7l8q"/>`,
		"fallback": "iconaut:arrow-big-left",
	});
}

export default Component;
