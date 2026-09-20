import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wug0x-_oz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wug0x-_oz"/>`,
		"fallback": "oi:globe",
	});
}

export default Component;
