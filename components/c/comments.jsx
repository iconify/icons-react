import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm87n4bjn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm87n4bjn"/>`,
		"fallback": "carbon:comments",
	});
}

export default Component;
