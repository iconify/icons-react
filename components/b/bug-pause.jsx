import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co5oh0yvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co5oh0yvz"/>`,
		"fallback": "mdi:bug-pause",
	});
}

export default Component;
