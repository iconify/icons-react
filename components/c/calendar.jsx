import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi1gnzbsb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi1gnzbsb"/>`,
		"fallback": "oui:calendar",
	});
}

export default Component;
