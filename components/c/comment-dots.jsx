import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcw82nfcd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcw82nfcd"/>`,
		"fallback": "fa6-solid:comment-dots",
	});
}

export default Component;
