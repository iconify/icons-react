import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k785w0v7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k785w0v7l"/>`,
		"fallback": "mdi:boom-barrier-up-outline",
	});
}

export default Component;
