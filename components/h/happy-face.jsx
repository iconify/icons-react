import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hms937aej.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hms937aej"/>`,
		"fallback": "pinhead:happy-face",
	});
}

export default Component;
