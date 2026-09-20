import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxtc5bcod.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxtc5bcod"/>`,
		"fallback": "lsicon:haze-outline",
	});
}

export default Component;
