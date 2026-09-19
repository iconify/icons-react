import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciqohqb6d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciqohqb6d"/>`,
		"fallback": "dinkie-icons:die-face5",
	});
}

export default Component;
