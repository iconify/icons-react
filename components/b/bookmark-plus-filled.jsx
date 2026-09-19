import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la3to1btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la3to1btd"/>`,
		"fallback": "boxicons:bookmark-plus-filled",
	});
}

export default Component;
