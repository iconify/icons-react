import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9eomtbce.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9eomtbce"/>`,
		"fallback": "dinkie-icons:black-right-double-triangle-with-vertical-bar-filled",
	});
}

export default Component;
