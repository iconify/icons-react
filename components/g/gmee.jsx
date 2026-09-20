import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfwyp2mkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfwyp2mkf"/>`,
		"fallback": "token:gmee",
	});
}

export default Component;
