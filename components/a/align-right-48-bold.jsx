import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_918vwrz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_918vwrz"/>`,
		"fallback": "energy-icons:align-right-48-bold",
	});
}

export default Component;
