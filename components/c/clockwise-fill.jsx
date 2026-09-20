import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py0818beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py0818beu"/>`,
		"fallback": "ri:clockwise-fill",
	});
}

export default Component;
