import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrvc4db4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrvc4db4k"/>`,
		"fallback": "mdi:account-multiple-6-feet",
	});
}

export default Component;
