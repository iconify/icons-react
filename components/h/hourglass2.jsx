import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxywjfe4o.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxywjfe4o"/>`,
		"fallback": "picon:hourglass2",
	});
}

export default Component;
