import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l528sxbfs.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l528sxbfs"/>`,
		"fallback": "picon:glass",
	});
}

export default Component;
