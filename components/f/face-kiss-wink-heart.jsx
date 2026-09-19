import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dja5gvbeb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dja5gvbeb"/>`,
		"fallback": "fa6-regular:face-kiss-wink-heart",
	});
}

export default Component;
