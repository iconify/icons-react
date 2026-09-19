import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2u5p3b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2u5p3b1m"/>`,
		"fallback": "bxs:caret-down-square",
	});
}

export default Component;
