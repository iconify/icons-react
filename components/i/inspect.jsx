import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff8z4qb1c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff8z4qb1c"/>`,
		"fallback": "oui:inspect",
	});
}

export default Component;
