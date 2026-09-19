import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz418kbmm.css';
import '../../css/t/tozovebkm.css';
import '../../css/w/wak66kbhs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz418kbmm"/><path class="tozovebkm"/><path class="wak66kbhs"/>`,
		"fallback": "fxemoji:crocodile",
	});
}

export default Component;
