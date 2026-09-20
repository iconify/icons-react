import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp1-21mul.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp1-21mul"/>`,
		"fallback": "oui:bullseye",
	});
}

export default Component;
