import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brb3lt_gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brb3lt_gf"/>`,
		"fallback": "bx:bxs-check-square",
	});
}

export default Component;
