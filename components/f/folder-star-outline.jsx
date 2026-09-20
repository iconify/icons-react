import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl-3rkfbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl-3rkfbe"/>`,
		"fallback": "mdi:folder-star-outline",
	});
}

export default Component;
