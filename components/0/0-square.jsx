import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9bnjb9-z.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9bnjb9-z"/>`,
		"fallback": "vs:0-square",
	});
}

export default Component;
