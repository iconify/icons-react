import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy_3vkbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy_3vkbzj"/>`,
		"fallback": "streamline-freehand:flip-rotate-clockwise",
	});
}

export default Component;
