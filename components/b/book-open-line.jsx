import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkzwb8bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkzwb8bsi"/>`,
		"fallback": "ri:book-open-line",
	});
}

export default Component;
