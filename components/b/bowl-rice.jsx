import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm5yisb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm5yisb0h"/>`,
		"fallback": "bxs:bowl-rice",
	});
}

export default Component;
