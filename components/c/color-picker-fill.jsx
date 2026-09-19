import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzogf1b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzogf1b4r"/>`,
		"fallback": "eva:color-picker-fill",
	});
}

export default Component;
