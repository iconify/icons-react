import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cvwcv7zoy.css';
import '../../css/m/m2lu62qxv.css';
import '../../css/p/pld9u5fxp.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cvwcv7zoy"/><path class="m2lu62qxv"/><path class="pld9u5fxp"/></g>`,
		"fallback": "flag:ga-4x3",
	});
}

export default Component;
