import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etgypeh5v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etgypeh5v"/>`,
		"fallback": "osmic:hinduist-14",
	});
}

export default Component;
