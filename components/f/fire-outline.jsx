import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr0ffdc1x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr0ffdc1x"/>`,
		"fallback": "lsicon:fire-outline",
	});
}

export default Component;
