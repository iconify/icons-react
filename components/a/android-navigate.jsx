import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4u8obcgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4u8obcgd"/>`,
		"fallback": "ion:android-navigate",
	});
}

export default Component;
