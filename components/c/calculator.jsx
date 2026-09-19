import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1y_t1x2z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1y_t1x2z"/>`,
		"fallback": "game-icons:calculator",
	});
}

export default Component;
