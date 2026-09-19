import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h07slsb7v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h07slsb7v"/>`,
		"fallback": "dinkie-icons:adobe-animate",
	});
}

export default Component;
