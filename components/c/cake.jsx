import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8715gb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8715gb_p"/>`,
		"fallback": "pixelarticons:cake",
	});
}

export default Component;
