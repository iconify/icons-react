import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdjbrmb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdjbrmb0v"/>`,
		"fallback": "thesvg:airplay-audio",
	});
}

export default Component;
