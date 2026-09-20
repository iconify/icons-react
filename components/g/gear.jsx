import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebd54rbcb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebd54rbcb"/>`,
		"fallback": "oui:gear",
	});
}

export default Component;
