import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz8djjb_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz8djjb_n"/>`,
		"fallback": "fa6-regular:copyright",
	});
}

export default Component;
