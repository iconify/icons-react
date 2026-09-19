import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0e02lbkk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0e02lbkk"/>`,
		"fallback": "fa7-brands:hubspot",
	});
}

export default Component;
