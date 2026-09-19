import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h97ie_j_x.css';

const viewBox = {"width":768,"height":656};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h97ie_j_x"/>`,
		"fallback": "ls:forward",
	});
}

export default Component;
