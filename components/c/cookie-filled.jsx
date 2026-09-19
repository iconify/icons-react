import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftk208b-h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftk208b-h"/>`,
		"fallback": "dinkie-icons:cookie-filled",
	});
}

export default Component;
