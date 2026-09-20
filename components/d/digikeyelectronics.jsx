import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlx2f45iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlx2f45iv"/>`,
		"fallback": "simple-icons:digikeyelectronics",
	});
}

export default Component;
