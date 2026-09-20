import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4p_vim0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4p_vim0o"/>`,
		"fallback": "mynaui:cart-minus-solid",
	});
}

export default Component;
