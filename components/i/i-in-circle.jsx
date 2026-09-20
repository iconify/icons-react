import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fups5pbve.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fups5pbve"/>`,
		"fallback": "oui:i-in-circle",
	});
}

export default Component;
