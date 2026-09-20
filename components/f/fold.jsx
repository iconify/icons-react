import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obgjjz6ai.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obgjjz6ai"/>`,
		"fallback": "oui:fold",
	});
}

export default Component;
