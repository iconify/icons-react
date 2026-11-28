import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew7pgvbcs.css';
import '../../css/i/i6yti7l8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew7pgvbcs secondary"/><path class="i6yti7l8q primary"/>`,
		"fallback": "iconaut:arrow-big-left-duo",
	});
}

export default Component;
