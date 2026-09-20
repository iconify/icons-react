import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0kp7lb8i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v0kp7lb8i"/>`,
		"fallback": "streamline:discount-percent-cutout-solid",
	});
}

export default Component;
