import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvyxec2yk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvyxec2yk"/>`,
		"fallback": "at-icons:arrow-left-from-line",
	});
}

export default Component;
