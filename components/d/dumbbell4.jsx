import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzck9dzmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wzck9dzmb"/>`,
		"fallback": "reicon:dumbbell4",
	});
}

export default Component;
