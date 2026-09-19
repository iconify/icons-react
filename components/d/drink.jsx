import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciwn85vpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciwn85vpb"/>`,
		"fallback": "bx:drink",
	});
}

export default Component;
