import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4t-c-b3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4t-c-b3r"/>`,
		"fallback": "selfhst:arduino-dark",
	});
}

export default Component;
