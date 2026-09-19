import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiokicbdt.css';

const viewBox = {"width":800,"height":764};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiokicbdt"/>`,
		"fallback": "ls:firefox",
	});
}

export default Component;
