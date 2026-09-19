import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0l8s-b2r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0l8s-b2r"/>`,
		"fallback": "fa7-solid:database",
	});
}

export default Component;
