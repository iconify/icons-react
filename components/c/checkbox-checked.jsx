import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykinbpbjf.css';
import '../../css/u/u_x0g8bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykinbpbjf"/><path class="u_x0g8bmz"/>`,
		"fallback": "bx:checkbox-checked",
	});
}

export default Component;
