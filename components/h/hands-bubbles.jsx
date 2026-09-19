import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcazbv6qs.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcazbv6qs"/>`,
		"fallback": "fa6-solid:hands-bubbles",
	});
}

export default Component;
