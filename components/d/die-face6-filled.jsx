import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef9ppxvyz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef9ppxvyz"/>`,
		"fallback": "dinkie-icons:die-face6-filled",
	});
}

export default Component;
