import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/chw1slugz.css';
import '../../css/w/wxo5dv6kc.css';
import '../../css/l/lm05hxbgz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 2)" class="n1lsf0bnc"><path class="chw1slugz"/><ellipse class="wxo5dv6kc"/><path class="lm05hxbgz"/></g>`,
		"fallback": "si-glyph:image",
	});
}

export default Component;
