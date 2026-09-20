import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni7s91bfv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni7s91bfv"/>`,
		"fallback": "maki:defibrillator",
	});
}

export default Component;
