import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwc4rkb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwc4rkb8m"/>`,
		"fallback": "thesvg-color:elastic-stack",
	});
}

export default Component;
