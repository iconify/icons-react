import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0h2dbtzj.css';
import '../../css/f/fm8iqpxxl.css';
import '../../css/a/ald9c1bns.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGwzwvLcwS" x1="8151.554" x2="2841.913" y1="-5021.914" y2="-4948.677" gradientTransform="matrix(.09676 0 0 -.09676 -274.314 -225.56)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d0h2dbtzj"/><stop offset="1" class="fm8iqpxxl"/></linearGradient><path fill="url(#SVGwzwvLcwS)" class="ald9c1bns"/>`,
		"fallback": "selfhst:icloud",
	});
}

export default Component;
