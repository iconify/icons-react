import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1klr8o9h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1klr8o9h"/>`,
		"fallback": "f7:bitcoin",
	});
}

export default Component;
