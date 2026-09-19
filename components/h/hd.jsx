import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l50k6bbov.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l50k6bbov"/>`,
		"fallback": "zmdi:hd",
	});
}

export default Component;
