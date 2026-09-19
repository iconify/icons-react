import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saa5oybee.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saa5oybee"/>`,
		"fallback": "fa7-solid:hockey-puck",
	});
}

export default Component;
