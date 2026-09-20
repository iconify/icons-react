import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7qwlry0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7qwlry0q"/>`,
		"fallback": "ri:arrow-left-circle-fill",
	});
}

export default Component;
