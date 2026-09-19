import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxw1mmmpk.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxw1mmmpk"/>`,
		"fallback": "whh:hockey",
	});
}

export default Component;
