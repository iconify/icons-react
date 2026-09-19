import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rctcol8zr.css';

const viewBox = {"width":384,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rctcol8zr"/>`,
		"fallback": "zmdi:city",
	});
}

export default Component;
