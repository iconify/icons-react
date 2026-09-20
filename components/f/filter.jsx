import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph9nw1sum.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph9nw1sum"/>`,
		"fallback": "picon:filter",
	});
}

export default Component;
