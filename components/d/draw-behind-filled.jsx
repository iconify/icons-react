import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeo6ylbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeo6ylbip"/>`,
		"fallback": "boxicons:draw-behind-filled",
	});
}

export default Component;
