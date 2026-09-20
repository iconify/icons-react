import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aarnm76dt.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aarnm76dt"/>`,
		"fallback": "picon:binocular",
	});
}

export default Component;
