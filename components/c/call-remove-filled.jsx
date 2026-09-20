import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou4l32ycl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou4l32ycl"/>`,
		"fallback": "reicon:call-remove-filled",
	});
}

export default Component;
