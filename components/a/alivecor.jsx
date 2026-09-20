import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgqxapb4d.css';

const viewBox = {"width":350,"height":44};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgqxapb4d"/>`,
		"fallback": "thesvg-color:alivecor",
	});
}

export default Component;
