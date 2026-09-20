import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrn74jbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrn74jbcj"/>`,
		"fallback": "mdi:archive-arrow-down-outline",
	});
}

export default Component;
