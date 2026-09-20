import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff38y247f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff38y247f"/>`,
		"fallback": "pixelarticons:flip-vertical-2",
	});
}

export default Component;
