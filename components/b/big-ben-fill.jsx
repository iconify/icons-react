import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh6n9kbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fh6n9kbdg"/>`,
		"fallback": "mingcute:big-ben-fill",
	});
}

export default Component;
