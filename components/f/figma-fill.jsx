import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5izz9dil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j5izz9dil"/>`,
		"fallback": "mingcute:figma-fill",
	});
}

export default Component;
