import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv5nqpbmb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv5nqpbmb"/>`,
		"fallback": "bi:cloud-arrow-down-fill",
	});
}

export default Component;
