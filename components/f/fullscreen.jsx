import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtxw-s4kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtxw-s4kd"/>`,
		"fallback": "bx:fullscreen",
	});
}

export default Component;
