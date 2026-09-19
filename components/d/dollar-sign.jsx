import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cac5rp0ma.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cac5rp0ma"/>`,
		"fallback": "fa6-solid:dollar-sign",
	});
}

export default Component;
