import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi5q95bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi5q95bfs"/>`,
		"fallback": "griddy-icons:headphones-filled",
	});
}

export default Component;
