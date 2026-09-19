import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_m5s5bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_m5s5bmf"/>`,
		"fallback": "bx:bxs-left-top-arrow-circle",
	});
}

export default Component;
