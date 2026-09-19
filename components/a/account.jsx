import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9hqy1byp.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9hqy1byp"/>`,
		"fallback": "zmdi:account",
	});
}

export default Component;
