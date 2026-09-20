import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vui8i3b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vui8i3b7y"/>`,
		"fallback": "keyline-icons:clock-6-fill",
	});
}

export default Component;
