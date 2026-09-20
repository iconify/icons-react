import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfhdwq6la.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfhdwq6la"/>`,
		"fallback": "material-icon-theme:beancount",
	});
}

export default Component;
