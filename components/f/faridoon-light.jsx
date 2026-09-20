import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxf62sb0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxf62sb0r"/>`,
		"fallback": "selfhst:faridoon-light",
	});
}

export default Component;
