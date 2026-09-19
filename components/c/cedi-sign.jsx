import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1y_1lbgx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1y_1lbgx"/>`,
		"fallback": "fa7-solid:cedi-sign",
	});
}

export default Component;
