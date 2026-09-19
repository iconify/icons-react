import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfmbqmhqr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfmbqmhqr"/>`,
		"fallback": "fa7-solid:8",
	});
}

export default Component;
