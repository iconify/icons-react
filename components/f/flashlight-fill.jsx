import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui9v0tb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui9v0tb0u"/>`,
		"fallback": "ri:flashlight-fill",
	});
}

export default Component;
