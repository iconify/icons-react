import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7zv2cbtr.css';

const viewBox = {"width":280,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7zv2cbtr"/>`,
		"fallback": "zmdi:directions-walk",
	});
}

export default Component;
