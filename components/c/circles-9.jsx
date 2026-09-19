import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb413xbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb413xbsz"/>`,
		"fallback": "boxicons:circles-9",
	});
}

export default Component;
