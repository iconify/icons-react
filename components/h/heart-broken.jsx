import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax92y6w3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax92y6w3v"/>`,
		"fallback": "mdi:heart-broken",
	});
}

export default Component;
