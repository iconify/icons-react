import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-e-4ab9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-e-4ab9q"/>`,
		"fallback": "bx:bxs-bookmark-alt-minus",
	});
}

export default Component;
