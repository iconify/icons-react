import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfex9exui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfex9exui"/>`,
		"fallback": "tabler:device-mobile-off",
	});
}

export default Component;
