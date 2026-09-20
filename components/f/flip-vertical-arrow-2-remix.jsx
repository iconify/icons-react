import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e14wadjqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e14wadjqn"/>`,
		"fallback": "streamline-sharp:flip-vertical-arrow-2-remix",
	});
}

export default Component;
