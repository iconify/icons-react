import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y2k4xsnap.css';
import '../../css/g/g3vzy16is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="y2k4xsnap"/><path class="g3vzy16is"/></g>`,
		"fallback": "keyline-icons:book-sharp-two-tone",
	});
}

export default Component;
