import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu-w0ybfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu-w0ybfj"/>`,
		"fallback": "guidance:elevator",
	});
}

export default Component;
