import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx45frbbi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx45frbbi"/>`,
		"fallback": "file-icons:amd",
	});
}

export default Component;
