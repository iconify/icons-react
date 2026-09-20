import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp4s1-v3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp4s1-v3y"/>`,
		"fallback": "mingcute:home-wifi-fill",
	});
}

export default Component;
