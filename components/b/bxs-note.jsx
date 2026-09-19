import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1et-gvci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1et-gvci"/>`,
		"fallback": "bx:bxs-note",
	});
}

export default Component;
