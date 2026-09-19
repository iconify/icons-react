import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7m6y0neb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7m6y0neb"/>`,
		"fallback": "catppuccin:arduino",
	});
}

export default Component;
