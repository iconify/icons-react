import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc0cf7bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc0cf7bbj"/>`,
		"fallback": "thesvg:doctrine",
	});
}

export default Component;
