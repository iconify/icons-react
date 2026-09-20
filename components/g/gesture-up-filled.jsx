import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efm51irty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efm51irty"/>`,
		"fallback": "tdesign:gesture-up-filled",
	});
}

export default Component;
