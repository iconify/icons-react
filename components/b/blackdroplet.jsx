import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2kcvmbtw.css';
import '../../css/x/xnsfeobti.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2kcvmbtw"/><path class="xnsfeobti"/>`,
		"fallback": "fxemoji:blackdroplet",
	});
}

export default Component;
