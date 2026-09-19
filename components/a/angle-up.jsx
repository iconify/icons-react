import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6syj6bkt.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6syj6bkt"/>`,
		"fallback": "fa6-solid:angle-up",
	});
}

export default Component;
