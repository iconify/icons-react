import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub82tgj1c.css';
import '../../css/e/espyn4ruh.css';
import '../../css/i/iw0h-09hc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub82tgj1c"/><path class="espyn4ruh"/><path class="iw0h-09hc"/>`,
		"fallback": "fxemoji:blackrightwardsarrow",
	});
}

export default Component;
