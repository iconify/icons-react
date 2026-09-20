import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow1xktbms.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow1xktbms"/>`,
		"fallback": "lineicons:busket-ball",
	});
}

export default Component;
