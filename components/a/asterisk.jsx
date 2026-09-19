import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy4mifo5c.css';

const viewBox = {"width":1472,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy4mifo5c"/>`,
		"fallback": "fa:asterisk",
	});
}

export default Component;
