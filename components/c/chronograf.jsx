import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exqc7kwxs.css';
import '../../css/v/vsr0hw0fo.css';
import '../../css/r/rrvqfdczg.css';

const viewBox = {"width":140,"height":140};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGKQj6QcUj" x1="63.166" x2="107.666" y1="62.628" y2="110.628" gradientUnits="userSpaceOnUse"><stop offset="0" class="exqc7kwxs"/><stop offset="1" class="vsr0hw0fo"/></linearGradient><path fill="url(#SVGKQj6QcUj)" class="rrvqfdczg"/>`,
		"fallback": "thesvg-color:chronograf",
	});
}

export default Component;
