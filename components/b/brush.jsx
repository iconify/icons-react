import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxxl__0bs.css';
import '../../css/e/e4ngkd7is.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxxl__0bs"/><path class="e4ngkd7is"/>`,
		"fallback": "lineicons:brush",
	});
}

export default Component;
