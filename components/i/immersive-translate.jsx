import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz46q1bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz46q1bza"/>`,
		"fallback": "thesvg-color:immersive-translate",
	});
}

export default Component;
