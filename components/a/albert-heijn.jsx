import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbt4c8ptk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbt4c8ptk"/>`,
		"fallback": "thesvg-color:albert-heijn",
	});
}

export default Component;
