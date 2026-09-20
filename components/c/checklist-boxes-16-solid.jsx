import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y831veb5y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y831veb5y"/>`,
		"fallback": "sidekickicons:checklist-boxes-16-solid",
	});
}

export default Component;
