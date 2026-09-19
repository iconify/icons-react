import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-epz3bkk.css';
import '../../css/e/eb9ww44oc.css';
import '../../css/g/gz2q0nbvi.css';
import '../../css/k/k3jd9cbhu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f-epz3bkk"/><path class="eb9ww44oc"/><path clip-rule="evenodd" class="gz2q0nbvi"/><path class="k3jd9cbhu"/></g>`,
		"fallback": "glyphs:helicopter-outline",
	});
}

export default Component;
