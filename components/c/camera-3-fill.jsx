import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hty2abc4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hty2abc4s"/>`,
		"fallback": "ri:camera-3-fill",
	});
}

export default Component;
