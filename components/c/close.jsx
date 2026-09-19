import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsk5650tm.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsk5650tm"/>`,
		"fallback": "fad:close",
	});
}

export default Component;
