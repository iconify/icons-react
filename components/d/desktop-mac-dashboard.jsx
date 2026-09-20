import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlx4qbcqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlx4qbcqg"/>`,
		"fallback": "mdi:desktop-mac-dashboard",
	});
}

export default Component;
