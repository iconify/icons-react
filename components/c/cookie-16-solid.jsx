import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij64onw0w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij64onw0w"/>`,
		"fallback": "sidekickicons:cookie-16-solid",
	});
}

export default Component;
