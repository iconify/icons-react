import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4u0-9bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4u0-9bit"/>`,
		"fallback": "pixelarticons:briefcases-sharp",
	});
}

export default Component;
