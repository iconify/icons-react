import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lch49bcjr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lch49bcjr"/>`,
		"fallback": "at-icons:arrow-uturn-right-up",
	});
}

export default Component;
