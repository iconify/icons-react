import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd_-mkbbv.css';
import '../../css/d/dmbrnfbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd_-mkbbv"/><path clip-rule="evenodd" class="dmbrnfbmz"/>`,
		"fallback": "solar:copy-close-outline",
	});
}

export default Component;
