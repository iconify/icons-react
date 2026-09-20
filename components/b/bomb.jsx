import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x85cs3buz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x85cs3buz"/>`,
		"fallback": "pixelarticons:bomb",
	});
}

export default Component;
