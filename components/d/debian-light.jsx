import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tw6t4sl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9tw6t4sl"/>`,
		"fallback": "selfhst:debian-light",
	});
}

export default Component;
