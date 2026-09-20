import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfotv0bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfotv0bxe"/>`,
		"fallback": "si:align-horiz-center-detailed-line",
	});
}

export default Component;
