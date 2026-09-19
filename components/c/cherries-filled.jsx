import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp7dy1b-r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp7dy1b-r"/>`,
		"fallback": "dinkie-icons:cherries-filled",
	});
}

export default Component;
