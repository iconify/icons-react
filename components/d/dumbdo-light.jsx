import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmp48sblm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmp48sblm"/>`,
		"fallback": "selfhst:dumbdo-light",
	});
}

export default Component;
