import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mudz3pbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mudz3pbii"/>`,
		"fallback": "mingcute:hotkey-line",
	});
}

export default Component;
