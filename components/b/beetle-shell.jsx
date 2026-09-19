import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5rz7fbyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5rz7fbyw"/>`,
		"fallback": "game-icons:beetle-shell",
	});
}

export default Component;
