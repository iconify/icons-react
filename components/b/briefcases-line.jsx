import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgpnn41og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgpnn41og"/>`,
		"fallback": "si:briefcases-line",
	});
}

export default Component;
