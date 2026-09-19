import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_ew_za4s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_ew_za4s"/>`,
		"fallback": "whh:avengers",
	});
}

export default Component;
