import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpsm8ob7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpsm8ob7t"/>`,
		"fallback": "token:cfx",
	});
}

export default Component;
