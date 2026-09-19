import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evhdcpftq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evhdcpftq"/>`,
		"fallback": "fa6-solid:cookie",
	});
}

export default Component;
