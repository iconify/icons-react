import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_0inpd7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_0inpd7s"/>`,
		"fallback": "mynaui:chat-minus-solid",
	});
}

export default Component;
