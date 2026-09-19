import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0c8g-3wh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0c8g-3wh"/>`,
		"fallback": "dinkie-icons:die-face4-small",
	});
}

export default Component;
