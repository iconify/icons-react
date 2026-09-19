import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2yps7bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y2yps7bep"/>`,
		"fallback": "iconoir:bookmark-circle-solid",
	});
}

export default Component;
