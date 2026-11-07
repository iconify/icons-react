import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erra6gogy.css';
import '../../css/i/ix_x8gb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erra6gogy"/><path class="ix_x8gb3x"/>`,
		"fallback": "solar:chat-square-off-bold",
	});
}

export default Component;
