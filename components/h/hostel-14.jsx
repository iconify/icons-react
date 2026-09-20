import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1lp2mbow.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1lp2mbow"/>`,
		"fallback": "osmic:hostel-14",
	});
}

export default Component;
