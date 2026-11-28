import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yihlb0bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yihlb0bix"/>`,
		"fallback": "iconaut:chart-column-stacked-solid",
	});
}

export default Component;
