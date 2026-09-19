import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zigurz_7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zigurz_7u"/>`,
		"fallback": "fa6-solid:circle-exclamation",
	});
}

export default Component;
