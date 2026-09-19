import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk3fodb7l.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk3fodb7l"/>`,
		"fallback": "whh:gmail",
	});
}

export default Component;
