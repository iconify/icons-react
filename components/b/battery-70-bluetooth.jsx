import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrt76sboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrt76sboa"/>`,
		"fallback": "mdi:battery-70-bluetooth",
	});
}

export default Component;
