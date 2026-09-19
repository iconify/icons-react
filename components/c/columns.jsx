import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yetb_qhpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yetb_qhpd"/>`,
		"fallback": "boxicons:columns",
	});
}

export default Component;
