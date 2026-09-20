import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1y-tob0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1y-tob0w"/>`,
		"fallback": "tabler:bowl-spoon-filled",
	});
}

export default Component;
