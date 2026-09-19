import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw9ue2s1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw9ue2s1x"/>`,
		"fallback": "bx:bx-card",
	});
}

export default Component;
