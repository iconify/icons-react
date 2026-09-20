import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fio3r8-yl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fio3r8-yl"/>`,
		"fallback": "thesvg-color:actual-budget",
	});
}

export default Component;
