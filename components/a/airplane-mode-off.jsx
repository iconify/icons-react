import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmj35zbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmj35zbax"/>`,
		"fallback": "guidance:airplane-mode-off",
	});
}

export default Component;
