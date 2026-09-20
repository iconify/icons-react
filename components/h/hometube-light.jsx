import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0j5u4hpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0j5u4hpl"/>`,
		"fallback": "selfhst:hometube-light",
	});
}

export default Component;
