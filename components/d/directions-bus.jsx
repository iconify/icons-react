import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv4b38b8r.css';

const viewBox = {"width":344,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv4b38b8r"/>`,
		"fallback": "zmdi:directions-bus",
	});
}

export default Component;
