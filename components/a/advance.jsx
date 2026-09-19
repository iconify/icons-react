import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnd46w4ky.css';
import '../../css/r/r56h83bjr.css';
import '../../css/s/showfpvwu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nnd46w4ky"><path class="r56h83bjr"/><path class="showfpvwu"/></g>`,
		"fallback": "flat-color-icons:advance",
	});
}

export default Component;
