import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4-kmfbos.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4-kmfbos"/>`,
		"fallback": "la:buffer",
	});
}

export default Component;
