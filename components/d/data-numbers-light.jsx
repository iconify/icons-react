import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo453mk3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jo453mk3c"/>`,
		"fallback": "stash:data-numbers-light",
	});
}

export default Component;
