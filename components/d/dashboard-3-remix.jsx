import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1tr4pbkr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u1tr4pbkr"/>`,
		"fallback": "streamline:dashboard-3-remix",
	});
}

export default Component;
