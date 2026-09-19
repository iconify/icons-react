import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1d5a6bum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1d5a6bum"/>`,
		"fallback": "bxs:been-here",
	});
}

export default Component;
