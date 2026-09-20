import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydp0yccjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydp0yccjm"/>`,
		"fallback": "vadivam:inbox",
	});
}

export default Component;
