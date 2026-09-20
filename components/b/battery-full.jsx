import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op5xopbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op5xopbiy"/>`,
		"fallback": "pixelarticons:battery-full",
	});
}

export default Component;
