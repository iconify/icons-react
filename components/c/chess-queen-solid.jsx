import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejdqt1mgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejdqt1mgp"/>`,
		"fallback": "iconaut:chess-queen-solid",
	});
}

export default Component;
