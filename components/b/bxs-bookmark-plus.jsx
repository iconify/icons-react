import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6ylgd8-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6ylgd8-t"/>`,
		"fallback": "bx:bxs-bookmark-plus",
	});
}

export default Component;
