import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo8je1bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fo8je1bqa"/>`,
		"fallback": "griddy-icons:crystal-ball",
	});
}

export default Component;
