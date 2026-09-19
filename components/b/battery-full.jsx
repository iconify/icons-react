import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnvcz7_-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnvcz7_-m"/>`,
		"fallback": "hugeicons:battery-full",
	});
}

export default Component;
