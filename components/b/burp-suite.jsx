import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvfw3i8xa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvfw3i8xa"/>`,
		"fallback": "thesvg:burp-suite",
	});
}

export default Component;
