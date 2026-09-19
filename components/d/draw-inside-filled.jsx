import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmugo4b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmugo4b_x"/>`,
		"fallback": "boxicons:draw-inside-filled",
	});
}

export default Component;
