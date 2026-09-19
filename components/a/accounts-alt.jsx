import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1jd9vhko.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1jd9vhko"/>`,
		"fallback": "zmdi:accounts-alt",
	});
}

export default Component;
