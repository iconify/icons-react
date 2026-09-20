import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twrtzr8ny.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twrtzr8ny"/>`,
		"fallback": "maki:airfield",
	});
}

export default Component;
