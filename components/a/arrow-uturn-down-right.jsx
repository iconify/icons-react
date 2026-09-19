import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axw8mbbpu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axw8mbbpu"/>`,
		"fallback": "at-icons:arrow-uturn-down-right",
	});
}

export default Component;
