import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fok2r0bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fok2r0bey"/>`,
		"fallback": "keyline-icons:hand-pointer-fill",
	});
}

export default Component;
