import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0c-0nbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0c-0nbcm"/>`,
		"fallback": "iconaut:arrow-left-through-line-solid",
	});
}

export default Component;
