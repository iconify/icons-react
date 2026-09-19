import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u20pfbbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u20pfbbsh"/>`,
		"fallback": "cbi:glasspanel-door-closed",
	});
}

export default Component;
