import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8x3bri7t.css';
import '../../css/y/yf5edlbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8x3bri7t"/><path class="yf5edlbyv"/>`,
		"fallback": "eva:charging-fill",
	});
}

export default Component;
