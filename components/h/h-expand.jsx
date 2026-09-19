import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj4fatbiu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj4fatbiu"/>`,
		"fallback": "fad:h-expand",
	});
}

export default Component;
