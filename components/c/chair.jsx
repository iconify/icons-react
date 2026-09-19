import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa0h4yvth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b fa0h4yvth"/>`,
		"fallback": "boxicons:chair",
	});
}

export default Component;
