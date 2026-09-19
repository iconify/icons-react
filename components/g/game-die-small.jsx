import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjsqj1b1o.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjsqj1b1o"/>`,
		"fallback": "dinkie-icons:game-die-small",
	});
}

export default Component;
