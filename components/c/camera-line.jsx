import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw5u_4bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw5u_4bha"/>`,
		"fallback": "ri:camera-line",
	});
}

export default Component;
