import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8hp5zbid.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8hp5zbid"/>`,
		"fallback": "selfhst:dope-security-light",
	});
}

export default Component;
