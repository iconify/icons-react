import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1hzngbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1hzngbbz"/>`,
		"fallback": "iconaut:arrow-up-left-solid",
	});
}

export default Component;
