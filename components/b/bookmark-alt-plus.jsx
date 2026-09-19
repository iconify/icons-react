import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr6ielglk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr6ielglk"/>`,
		"fallback": "bxs:bookmark-alt-plus",
	});
}

export default Component;
