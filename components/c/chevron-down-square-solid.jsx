import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q734u6b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q734u6b8b"/>`,
		"fallback": "iconaut:chevron-down-square-solid",
	});
}

export default Component;
