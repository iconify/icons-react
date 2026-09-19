import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrz8nvb6z.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrz8nvb6z"/>`,
		"fallback": "dinkie-icons:information-desk-person",
	});
}

export default Component;
