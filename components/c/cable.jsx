import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws0ydgb0q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws0ydgb0q"/>`,
		"fallback": "pinhead:cable",
	});
}

export default Component;
