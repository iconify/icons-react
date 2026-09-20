import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqd8dx1br.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqd8dx1br"/>`,
		"fallback": "la:history",
	});
}

export default Component;
