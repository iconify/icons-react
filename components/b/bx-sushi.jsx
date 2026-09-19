import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyn6rc_-u.css';
import '../../css/j/j_ie9rx3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyn6rc_-u"/><ellipse class="j_ie9rx3d"/>`,
		"fallback": "bx:bx-sushi",
	});
}

export default Component;
