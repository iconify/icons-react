import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phew_p5rb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="phew_p5rb"/>`,
		"fallback": "iconoir:chat-bubble-translate-solid",
	});
}

export default Component;
