import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc-34jbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc-34jbcx"/>`,
		"fallback": "lets-icons:battery-full-fill",
	});
}

export default Component;
