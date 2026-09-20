import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo9gusfap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo9gusfap"/>`,
		"fallback": "pixelarticons:badge-captions-sharp",
	});
}

export default Component;
