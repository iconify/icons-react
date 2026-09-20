import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucs1pdbjd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucs1pdbjd"/>`,
		"fallback": "selfhst:appwrite-light",
	});
}

export default Component;
