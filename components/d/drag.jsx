import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih91fyb-z.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih91fyb-z"/>`,
		"fallback": "system-uicons:drag",
	});
}

export default Component;
