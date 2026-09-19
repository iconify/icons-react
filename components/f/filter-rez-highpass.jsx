import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc7oyuykq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc7oyuykq"/>`,
		"fallback": "fad:filter-rez-highpass",
	});
}

export default Component;
