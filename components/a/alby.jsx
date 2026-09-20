import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b26x_t55o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b26x_t55o"/>`,
		"fallback": "thesvg-color:alby",
	});
}

export default Component;
