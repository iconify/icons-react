import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fok7ss8hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fok7ss8hy"/>`,
		"fallback": "keyline-icons:dice-6-horizontal-fill",
	});
}

export default Component;
