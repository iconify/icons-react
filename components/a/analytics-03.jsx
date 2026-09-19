import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd_vn6zxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd_vn6zxf"/>`,
		"fallback": "hugeicons:analytics-03",
	});
}

export default Component;
