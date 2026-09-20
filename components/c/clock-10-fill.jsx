import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_q4bebzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w_q4bebzb"/>`,
		"fallback": "keyline-icons:clock-10-fill",
	});
}

export default Component;
