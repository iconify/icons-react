import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4e2-rves.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4e2-rves"/>`,
		"fallback": "mdi:earth-box-plus",
	});
}

export default Component;
