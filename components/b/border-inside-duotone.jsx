import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm4ku1vqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm4ku1vqw primary"/>`,
		"fallback": "iconaut:border-inside-duotone",
	});
}

export default Component;
