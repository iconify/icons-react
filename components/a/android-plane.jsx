import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iklu0itxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iklu0itxf"/>`,
		"fallback": "ion:android-plane",
	});
}

export default Component;
