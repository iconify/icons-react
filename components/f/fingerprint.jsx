import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h919i69mc.css';
import '../../css/a/aosxdz-mw.css';
import '../../css/e/eqjj6acuc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h919i69mc"/><path class="aosxdz-mw"/><path class="eqjj6acuc"/></g>`,
		"fallback": "at-icons:fingerprint",
	});
}

export default Component;
