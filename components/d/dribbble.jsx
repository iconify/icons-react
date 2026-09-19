import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7lqgabtr.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7lqgabtr"/>`,
		"fallback": "ls:dribbble",
	});
}

export default Component;
