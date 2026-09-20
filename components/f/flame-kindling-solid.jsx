import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlxk5qbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlxk5qbfx"/>`,
		"fallback": "mynaui:flame-kindling-solid",
	});
}

export default Component;
