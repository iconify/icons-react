import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uonzi7l5s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uonzi7l5s"/>`,
		"fallback": "dinkie-icons:die-face4",
	});
}

export default Component;
