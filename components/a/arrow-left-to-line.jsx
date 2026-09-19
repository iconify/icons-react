import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl2u2mtnh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl2u2mtnh"/>`,
		"fallback": "at-icons:arrow-left-to-line",
	});
}

export default Component;
