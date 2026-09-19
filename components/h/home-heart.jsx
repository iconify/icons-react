import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt2ou9bdc.css';
import '../../css/y/yvd4i4bhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt2ou9bdc"/><path class="yvd4i4bhz"/>`,
		"fallback": "bx:home-heart",
	});
}

export default Component;
