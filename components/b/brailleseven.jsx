import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy9s2_bga.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy9s2_bga"/>`,
		"fallback": "whh:brailleseven",
	});
}

export default Component;
