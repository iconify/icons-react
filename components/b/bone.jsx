import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nan55u7bm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nan55u7bm"/>`,
		"fallback": "fa7-solid:bone",
	});
}

export default Component;
