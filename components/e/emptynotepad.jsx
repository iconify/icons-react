import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec0gkmgev.css';
import '../../css/g/gdh-m2hxd.css';
import '../../css/e/evj_wderx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec0gkmgev"/><path class="gdh-m2hxd"/><path class="evj_wderx"/>`,
		"fallback": "fxemoji:emptynotepad",
	});
}

export default Component;
