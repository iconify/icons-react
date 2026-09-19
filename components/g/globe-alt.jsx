import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znd8k54cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znd8k54cv"/>`,
		"fallback": "boxicons:globe-alt",
	});
}

export default Component;
