import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsk9mvbbf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsk9mvbbf"/>`,
		"fallback": "dinkie-icons:device-rotate",
	});
}

export default Component;
