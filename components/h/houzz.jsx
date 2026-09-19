import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it41hmb4k.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it41hmb4k"/>`,
		"fallback": "fa6-brands:houzz",
	});
}

export default Component;
