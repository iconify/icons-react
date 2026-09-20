import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwi-yg3xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwi-yg3xg"/>`,
		"fallback": "keyline-icons:book-open",
	});
}

export default Component;
