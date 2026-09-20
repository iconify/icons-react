import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnlz8vwcp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnlz8vwcp"/>`,
		"fallback": "picon:fox",
	});
}

export default Component;
