import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w96p14lvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w96p14lvu"/>`,
		"fallback": "selfhst:bind-9",
	});
}

export default Component;
