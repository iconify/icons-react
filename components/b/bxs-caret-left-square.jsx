import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7p_eac0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7p_eac0t"/>`,
		"fallback": "bx:bxs-caret-left-square",
	});
}

export default Component;
