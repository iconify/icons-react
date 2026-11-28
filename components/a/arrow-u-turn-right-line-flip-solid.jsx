import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekf6tmb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekf6tmb1z"/>`,
		"fallback": "iconaut:arrow-u-turn-right-line-flip-solid",
	});
}

export default Component;
