import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/r/r73utib8z.css';
import '../../css/q/q0ouhhhum.css';
import '../../css/m/mwl13xblr.css';
import '../../css/c/c-gxz6bna.css';
import '../../css/e/egmm4t75a.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="r73utib8z"/><path class="q0ouhhhum"/><path class="mwl13xblr"/><path class="c-gxz6bna"/><path class="egmm4t75a"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-equatorial-guinea",
	});
}

export default Component;
