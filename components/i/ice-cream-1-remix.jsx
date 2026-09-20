import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ett0-9bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ett0-9bxu"/>`,
		"fallback": "streamline-sharp:ice-cream-1-remix",
	});
}

export default Component;
