import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhjd2cq1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhjd2cq1k"/>`,
		"fallback": "thesvg-color:dassault-systemes",
	});
}

export default Component;
