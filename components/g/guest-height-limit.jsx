import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1_gjbm1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1_gjbm1x"/>`,
		"fallback": "guidance:guest-height-limit",
	});
}

export default Component;
