import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i50hvfb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i50hvfb8p"/>`,
		"fallback": "boxicons:factory-filled",
	});
}

export default Component;
