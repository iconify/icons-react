import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgp09xbhr.css';
import '../../css/i/i1tveqj0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgp09xbhr"/><path class="i1tveqj0p"/>`,
		"fallback": "mingcute:flame-line",
	});
}

export default Component;
