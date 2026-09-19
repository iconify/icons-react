import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9y6d-b5r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9y6d-b5r"/>`,
		"fallback": "codicon:bracket-error",
	});
}

export default Component;
