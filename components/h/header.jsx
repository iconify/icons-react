import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vui4akb2q.css';

const viewBox = {"width":1728,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vui4akb2q"/>`,
		"fallback": "fa:header",
	});
}

export default Component;
