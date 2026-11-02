import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-5n0kbyx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y-5n0kbyx"/>`,
		"fallback": "sidekickicons:arrow-curve-down-left-16-solid",
	});
}

export default Component;
