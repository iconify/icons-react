import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un7tcbb8i.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un7tcbb8i"/>`,
		"fallback": "fa-brands:fedora",
	});
}

export default Component;
