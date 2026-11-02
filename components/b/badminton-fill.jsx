import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_3wj7fzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_3wj7fzn"/>`,
		"fallback": "mingcute:badminton-fill",
	});
}

export default Component;
