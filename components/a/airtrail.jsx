import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa036zbhn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa036zbhn"/>`,
		"fallback": "selfhst:airtrail",
	});
}

export default Component;
