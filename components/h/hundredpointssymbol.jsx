import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-1tk425g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-1tk425g"/>`,
		"fallback": "fxemoji:hundredpointssymbol",
	});
}

export default Component;
