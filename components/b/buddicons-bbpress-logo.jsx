import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftohyfuih.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftohyfuih"/>`,
		"fallback": "dashicons:buddicons-bbpress-logo",
	});
}

export default Component;
