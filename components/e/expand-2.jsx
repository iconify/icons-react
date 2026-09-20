import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl_5e3bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl_5e3bdj"/>`,
		"fallback": "streamline-ultimate:expand-2",
	});
}

export default Component;
