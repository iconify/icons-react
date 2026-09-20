import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_h8f4u0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_h8f4u0v"/>`,
		"fallback": "mdi:emoticon-excited",
	});
}

export default Component;
