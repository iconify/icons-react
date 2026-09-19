import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m640zw-kt.css';
import '../../css/p/pvo4qd6wm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m640zw-kt"/><path class="pvo4qd6wm"/>`,
		"fallback": "fxemoji:ballottboxwithscriptx",
	});
}

export default Component;
