import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywz-nyv8i.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywz-nyv8i"/>`,
		"fallback": "zmdi:account-o",
	});
}

export default Component;
