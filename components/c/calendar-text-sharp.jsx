import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz__0t3bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz__0t3bf"/>`,
		"fallback": "pixelarticons:calendar-text-sharp",
	});
}

export default Component;
