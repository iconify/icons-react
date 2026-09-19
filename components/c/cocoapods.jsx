import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y06zqfbtb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y06zqfbtb"/>`,
		"fallback": "file-icons:cocoapods",
	});
}

export default Component;
