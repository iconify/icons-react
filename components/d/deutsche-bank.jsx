import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unt8ljbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unt8ljbcp"/>`,
		"fallback": "thesvg-color:deutsche-bank",
	});
}

export default Component;
