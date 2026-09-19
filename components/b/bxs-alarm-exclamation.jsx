import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smx10x8rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smx10x8rd"/>`,
		"fallback": "bx:bxs-alarm-exclamation",
	});
}

export default Component;
