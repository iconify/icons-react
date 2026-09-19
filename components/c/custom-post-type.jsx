import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5j5exdpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5j5exdpy"/>`,
		"fallback": "gridicons:custom-post-type",
	});
}

export default Component;
