import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqy0fzbvu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqy0fzbvu"/>`,
		"fallback": "bi:credit-card-2-front-fill",
	});
}

export default Component;
