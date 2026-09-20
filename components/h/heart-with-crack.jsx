import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp7je4b7u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp7je4b7u"/>`,
		"fallback": "pinhead:heart-with-crack",
	});
}

export default Component;
