import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9sia4b8r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9sia4b8r"/>`,
		"fallback": "heroicons:adjustments-vertical-16-solid",
	});
}

export default Component;
