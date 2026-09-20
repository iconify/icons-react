import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewru3_btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewru3_btl"/>`,
		"fallback": "tdesign:gesture-typing-filled",
	});
}

export default Component;
