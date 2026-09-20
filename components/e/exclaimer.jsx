import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llv0gxble.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llv0gxble"/>`,
		"fallback": "selfhst:exclaimer",
	});
}

export default Component;
