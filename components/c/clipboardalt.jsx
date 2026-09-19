import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9l5b2b1x.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9l5b2b1x"/>`,
		"fallback": "whh:clipboardalt",
	});
}

export default Component;
