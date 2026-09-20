import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh4h_-bmp.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh4h_-bmp"/>`,
		"fallback": "jam:brightness-up-f",
	});
}

export default Component;
