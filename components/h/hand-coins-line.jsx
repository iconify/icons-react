import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fft62cnys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fft62cnys"/>`,
		"fallback": "mingcute:hand-coins-line",
	});
}

export default Component;
