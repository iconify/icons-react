import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0uqw6imm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0uqw6imm"/>`,
		"fallback": "dinkie-icons:die-face3-filled",
	});
}

export default Component;
