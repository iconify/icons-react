import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flln8sb4m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flln8sb4m"/>`,
		"fallback": "bi:exclamation-lg",
	});
}

export default Component;
