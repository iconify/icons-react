import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnyr7tqvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnyr7tqvv"/>`,
		"fallback": "ri:dislike-fill",
	});
}

export default Component;
