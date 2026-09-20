import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhj3tr_ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhj3tr_ac"/>`,
		"fallback": "thesvg:homify",
	});
}

export default Component;
