import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqk3hhf6z.css';

const viewBox = {"width":472,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqk3hhf6z"/>`,
		"fallback": "zmdi:desktop-windows",
	});
}

export default Component;
