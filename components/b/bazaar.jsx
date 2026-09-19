import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-e8jibpn.css';

const viewBox = {"width":500,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-e8jibpn"/>`,
		"fallback": "file-icons:bazaar",
	});
}

export default Component;
