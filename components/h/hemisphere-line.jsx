import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pigl6sbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pigl6sbkh"/>`,
		"fallback": "mingcute:hemisphere-line",
	});
}

export default Component;
