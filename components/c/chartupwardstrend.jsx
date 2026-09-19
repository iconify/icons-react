import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcpug3b7d.css';
import '../../css/w/wvt4upzll.css';
import '../../css/r/rfmo84bve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcpug3b7d"/><path class="wvt4upzll"/><path class="rfmo84bve"/>`,
		"fallback": "fxemoji:chartupwardstrend",
	});
}

export default Component;
