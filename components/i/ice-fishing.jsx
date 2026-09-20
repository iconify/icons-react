import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th9y1yc-z.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th9y1yc-z"/>`,
		"fallback": "map:ice-fishing",
	});
}

export default Component;
