import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-b_-kbhg.css';
import '../../css/g/gsd-3zbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-b_-kbhg"/><path class="gsd-3zbqi"/>`,
		"fallback": "boxicons:image-plus-filled",
	});
}

export default Component;
