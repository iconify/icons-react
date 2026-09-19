import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv_hzn8gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv_hzn8gl"/>`,
		"fallback": "boxicons:iframe",
	});
}

export default Component;
