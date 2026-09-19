import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf6tsfb9h.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf6tsfb9h"/>`,
		"fallback": "fa6-solid:dice-five",
	});
}

export default Component;
