import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr1n1y8wn.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr1n1y8wn"/>`,
		"fallback": "jam:flashlight-on-f",
	});
}

export default Component;
