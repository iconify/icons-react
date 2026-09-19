import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te315qpuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te315qpuv"/>`,
		"fallback": "bxl:apple-music",
	});
}

export default Component;
