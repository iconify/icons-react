import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgwn2bc2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgwn2bc2q"/>`,
		"fallback": "bx:bxs-log-out",
	});
}

export default Component;
