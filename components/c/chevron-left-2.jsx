import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbgvjabpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbgvjabpd"/>`,
		"fallback": "pixelarticons:chevron-left-2",
	});
}

export default Component;
