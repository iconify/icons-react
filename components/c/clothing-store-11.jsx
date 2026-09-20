import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl_kitb3r.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl_kitb3r"/>`,
		"fallback": "maki:clothing-store-11",
	});
}

export default Component;
