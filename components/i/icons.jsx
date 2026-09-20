import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4v1fn46v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4v1fn46v"/>`,
		"fallback": "raphael:icons",
	});
}

export default Component;
