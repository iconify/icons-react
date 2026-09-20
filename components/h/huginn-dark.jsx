import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhx0_eg3c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhx0_eg3c"/>`,
		"fallback": "selfhst:huginn-dark",
	});
}

export default Component;
