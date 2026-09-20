import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3fk4rlyv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3fk4rlyv"/>`,
		"fallback": "osmic:hunting-stand-14",
	});
}

export default Component;
