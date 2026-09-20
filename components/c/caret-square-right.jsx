import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv6m5xotf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv6m5xotf"/>`,
		"fallback": "la:caret-square-right",
	});
}

export default Component;
