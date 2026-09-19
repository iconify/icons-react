import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo5zzcbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vo5zzcbuw"/>`,
		"fallback": "iconamoon:arrow-top-right-5-circle-fill",
	});
}

export default Component;
