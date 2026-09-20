import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpuk8e8pn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpuk8e8pn"/>`,
		"fallback": "ix:brush",
	});
}

export default Component;
