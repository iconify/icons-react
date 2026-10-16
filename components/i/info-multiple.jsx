import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cswyp5p5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cswyp5p5z"/>`,
		"fallback": "ix:info-multiple",
	});
}

export default Component;
