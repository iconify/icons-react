import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvhoa56dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvhoa56dk"/>`,
		"fallback": "thesvg-color:bandcamp",
	});
}

export default Component;
