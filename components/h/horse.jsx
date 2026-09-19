import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni-g6ebai.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni-g6ebai"/>`,
		"fallback": "fa7-solid:horse",
	});
}

export default Component;
