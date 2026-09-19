import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxlo_dguu.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxlo_dguu"/>`,
		"fallback": "ls:crop",
	});
}

export default Component;
