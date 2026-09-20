import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq8bjuytw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq8bjuytw"/>`,
		"fallback": "si:align-horiz-center-simple-line",
	});
}

export default Component;
