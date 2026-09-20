import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twizxgc3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twizxgc3f"/>`,
		"fallback": "pixelarticons:calendar-range",
	});
}

export default Component;
