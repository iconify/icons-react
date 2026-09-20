import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm0jmxb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm0jmxb_j"/>`,
		"fallback": "ri:eraser-line",
	});
}

export default Component;
