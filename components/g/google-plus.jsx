import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt4uggbee.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt4uggbee"/>`,
		"fallback": "la:google-plus",
	});
}

export default Component;
