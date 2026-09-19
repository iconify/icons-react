import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q52xqac6e.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q52xqac6e"/>`,
		"fallback": "dinkie-icons:die-face3",
	});
}

export default Component;
