import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb0qt7r9l.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb0qt7r9l"/>`,
		"fallback": "dinkie-icons:frog-face",
	});
}

export default Component;
