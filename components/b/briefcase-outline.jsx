import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx74kcluf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx74kcluf"/>`,
		"fallback": "eva:briefcase-outline",
	});
}

export default Component;
