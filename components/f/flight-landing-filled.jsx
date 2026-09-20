import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-zv0sbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-zv0sbfb"/>`,
		"fallback": "tdesign:flight-landing-filled",
	});
}

export default Component;
