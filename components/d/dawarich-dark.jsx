import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5rb22bzv.css';
import '../../css/a/az0-jcc3g.css';
import '../../css/a/a847c404k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5rb22bzv"/><path class="az0-jcc3g"/><path class="a847c404k"/>`,
		"fallback": "selfhst:dawarich-dark",
	});
}

export default Component;
