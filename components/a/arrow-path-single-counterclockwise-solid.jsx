import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm-5iib6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm-5iib6f"/>`,
		"fallback": "sidekickicons:arrow-path-single-counterclockwise-solid",
	});
}

export default Component;
