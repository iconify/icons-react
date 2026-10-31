import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puznxsb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puznxsb5b"/>`,
		"fallback": "coolicons:eraser-sparkle-fill-round",
	});
}

export default Component;
