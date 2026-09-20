import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1m0s1bcj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1m0s1bcj"/>`,
		"fallback": "la:bomb",
	});
}

export default Component;
