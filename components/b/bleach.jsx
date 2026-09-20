import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydz5a80uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydz5a80uc"/>`,
		"fallback": "tabler:bleach",
	});
}

export default Component;
