import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x05pc-vgk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x05pc-vgk"/>`,
		"fallback": "fad:arpdown",
	});
}

export default Component;
