import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdd7vy8ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdd7vy8ix"/>`,
		"fallback": "keyline-icons:arrow-in-up-dashed-panel",
	});
}

export default Component;
