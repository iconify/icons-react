import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjqg-lw3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjqg-lw3p"/>`,
		"fallback": "bx:bxs-bell",
	});
}

export default Component;
