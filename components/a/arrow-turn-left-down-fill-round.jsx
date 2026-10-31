import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfj06-b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfj06-b1z"/>`,
		"fallback": "coolicons:arrow-turn-left-down-fill-round",
	});
}

export default Component;
