import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no7dq_bgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no7dq_bgn"/>`,
		"fallback": "guidance:flash-not-allowed",
	});
}

export default Component;
