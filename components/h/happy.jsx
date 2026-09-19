import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8h3wbbrs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8h3wbbrs"/>`,
		"fallback": "famicons:happy",
	});
}

export default Component;
