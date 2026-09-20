import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wly-g5b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wly-g5b2u"/>`,
		"fallback": "tdesign:chart-line-board-filled",
	});
}

export default Component;
