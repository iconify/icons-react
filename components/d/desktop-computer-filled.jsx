import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsbddlk4l.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsbddlk4l"/>`,
		"fallback": "dinkie-icons:desktop-computer-filled",
	});
}

export default Component;
