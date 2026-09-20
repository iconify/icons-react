import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1w4obb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1w4obb1p"/>`,
		"fallback": "mdi:hand-back-left",
	});
}

export default Component;
