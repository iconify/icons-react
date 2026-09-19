import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bepmzn8hy.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bepmzn8hy"/>`,
		"fallback": "fad:filter-bypass",
	});
}

export default Component;
