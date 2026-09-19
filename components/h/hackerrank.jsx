import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-js14bpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-js14bpz"/>`,
		"fallback": "fa6-brands:hackerrank",
	});
}

export default Component;
