import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-b-jsbkc.css';
import '../../css/x/x796ssb0a.css';
import '../../css/p/ptmbtpbpn.css';
import '../../css/k/k1c77xo2b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u-b-jsbkc"/><path class="x796ssb0a"/><path clip-rule="evenodd" class="ptmbtpbpn"/><path clip-rule="evenodd" class="k1c77xo2b"/></g>`,
		"fallback": "pepicons:flower",
	});
}

export default Component;
