import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulo34lq1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulo34lq1p"/>`,
		"fallback": "proicons:eraser",
	});
}

export default Component;
