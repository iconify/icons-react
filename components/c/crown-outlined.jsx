import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0ns52iae.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0ns52iae"/>`,
		"fallback": "ant-design:crown-outlined",
	});
}

export default Component;
