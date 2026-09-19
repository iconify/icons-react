import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4xh7-bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4xh7-bfx"/>`,
		"fallback": "heroicons-outline:archive",
	});
}

export default Component;
