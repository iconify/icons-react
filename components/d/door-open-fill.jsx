import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8d2m-gls.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8d2m-gls"/>`,
		"fallback": "bi:door-open-fill",
	});
}

export default Component;
