import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7q45q27k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7q45q27k"/>`,
		"fallback": "roentgen:ice-cream",
	});
}

export default Component;
