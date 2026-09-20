import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y95p8j6km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y95p8j6km"/>`,
		"fallback": "mdi-light:alarm-plus",
	});
}

export default Component;
