import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgn19vb8x.css';

const viewBox = {"width":551,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgn19vb8x"/>`,
		"fallback": "ls:category",
	});
}

export default Component;
