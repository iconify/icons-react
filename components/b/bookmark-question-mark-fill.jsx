import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn6ghm8vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn6ghm8vb"/>`,
		"fallback": "mage:bookmark-question-mark-fill",
	});
}

export default Component;
