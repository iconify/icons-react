import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0m4y9b-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0m4y9b-a"/>`,
		"fallback": "mynaui:door-closed-locked",
	});
}

export default Component;
