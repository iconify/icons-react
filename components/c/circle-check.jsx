import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk19ygbkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk19ygbkh"/>`,
		"fallback": "fa6-solid:circle-check",
	});
}

export default Component;
