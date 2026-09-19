import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz5zt-bzl.css';

const viewBox = {"width":435,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz5zt-bzl"/>`,
		"fallback": "file-icons:apiextractor",
	});
}

export default Component;
