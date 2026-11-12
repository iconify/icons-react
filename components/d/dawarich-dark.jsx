import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5rb22bzv.css';
import '../../css/a/ad4ln5bah.css';
import '../../css/y/y0wutcc8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5rb22bzv"/><path class="ad4ln5bah"/><path class="y0wutcc8a"/>`,
		"fallback": "selfhst:dawarich-dark",
	});
}

export default Component;
