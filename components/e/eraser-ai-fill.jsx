import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opv7sjbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opv7sjbuo"/>`,
		"fallback": "mingcute:eraser-ai-fill",
	});
}

export default Component;
