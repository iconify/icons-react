import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgalthvnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgalthvnc"/>`,
		"fallback": "streamline-ultimate:drawer-envelope-bold",
	});
}

export default Component;
