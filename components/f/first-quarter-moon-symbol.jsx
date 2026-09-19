import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftu8mvbwr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftu8mvbwr"/>`,
		"fallback": "dinkie-icons:first-quarter-moon-symbol",
	});
}

export default Component;
