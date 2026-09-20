import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbxi8usrf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbxi8usrf"/>`,
		"fallback": "selfhst:europris-light",
	});
}

export default Component;
