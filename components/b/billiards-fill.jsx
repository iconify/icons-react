import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te3tkcy-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te3tkcy-j"/>`,
		"fallback": "ri:billiards-fill",
	});
}

export default Component;
