import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x03w4o6-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x03w4o6-w"/>`,
		"fallback": "streamline-sharp:give-gift-remix",
	});
}

export default Component;
