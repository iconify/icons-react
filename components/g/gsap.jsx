import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz3vwebsj.css';
import '../../css/l/l2g7ibbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz3vwebsj"/><path class="l2g7ibbky"/>`,
		"fallback": "bxl:gsap",
	});
}

export default Component;
