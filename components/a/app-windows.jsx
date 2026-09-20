import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzlga5_wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzlga5_wm"/>`,
		"fallback": "pixelarticons:app-windows",
	});
}

export default Component;
