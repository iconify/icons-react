import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9ka4w-1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9ka4w-1t"/>`,
		"fallback": "ri:finder-line",
	});
}

export default Component;
