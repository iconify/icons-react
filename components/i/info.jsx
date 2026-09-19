import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km3o8g18s.css';

const viewBox = {"width":192,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km3o8g18s"/>`,
		"fallback": "fa6-solid:info",
	});
}

export default Component;
