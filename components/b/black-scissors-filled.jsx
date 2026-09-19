import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-9ok0b6p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-9ok0b6p"/>`,
		"fallback": "dinkie-icons:black-scissors-filled",
	});
}

export default Component;
