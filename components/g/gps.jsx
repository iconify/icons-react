import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq6644j8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq6644j8s"/>`,
		"fallback": "pixelarticons:gps",
	});
}

export default Component;
