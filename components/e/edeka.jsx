import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd78jgbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd78jgbrd"/>`,
		"fallback": "thesvg-color:edeka",
	});
}

export default Component;
