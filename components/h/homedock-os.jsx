import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn33j1the.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn33j1the"/>`,
		"fallback": "selfhst:homedock-os",
	});
}

export default Component;
