import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2wcqfbcp.css';

const viewBox = {"width":1024,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2wcqfbcp"/>`,
		"fallback": "whh:capacitator",
	});
}

export default Component;
