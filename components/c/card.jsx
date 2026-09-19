import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utgju3_rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utgju3_rx"/>`,
		"fallback": "bxs:card",
	});
}

export default Component;
