import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc8mw0b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc8mw0b7n"/>`,
		"fallback": "coolicons:desktop-fill-round",
	});
}

export default Component;
