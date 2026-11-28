import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/damvkuf4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="damvkuf4q"/>`,
		"fallback": "iconaut:arrow-u-turn-right-line-solid",
	});
}

export default Component;
