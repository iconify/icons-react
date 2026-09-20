import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcxfff5pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcxfff5pm"/>`,
		"fallback": "streamline-ultimate:analytics-board-graph-line-bold",
	});
}

export default Component;
