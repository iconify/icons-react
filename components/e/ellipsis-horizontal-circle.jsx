import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt882-bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt882-bxr"/>`,
		"fallback": "heroicons-outline:ellipsis-horizontal-circle",
	});
}

export default Component;
