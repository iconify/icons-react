import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyra8pbbh.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyra8pbbh"/>`,
		"fallback": "zmdi:cloud",
	});
}

export default Component;
