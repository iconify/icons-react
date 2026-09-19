import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkftr6bal.css';
import '../../css/o/of7e8kpvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkftr6bal"/><path class="of7e8kpvp"/>`,
		"fallback": "bx:bx-camera",
	});
}

export default Component;
