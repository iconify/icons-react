import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alhq8vbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alhq8vbho"/>`,
		"fallback": "mingcute:bluesky-social-fill",
	});
}

export default Component;
