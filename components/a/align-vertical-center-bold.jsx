import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2gy-yl-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2gy-yl-d"/>`,
		"fallback": "solar:align-vertical-center-bold",
	});
}

export default Component;
