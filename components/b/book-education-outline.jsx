import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cncj86rwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cncj86rwr"/>`,
		"fallback": "mdi:book-education-outline",
	});
}

export default Component;
