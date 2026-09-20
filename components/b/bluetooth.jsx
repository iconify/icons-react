import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_8ijoebc.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_8ijoebc"/>`,
		"fallback": "lineicons:bluetooth",
	});
}

export default Component;
