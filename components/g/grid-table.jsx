import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw8xyyw2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw8xyyw2m"/>`,
		"fallback": "hugeicons:grid-table",
	});
}

export default Component;
