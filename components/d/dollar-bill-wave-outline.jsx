import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afgucnb6q.css';
import '../../css/f/fo94usbna.css';
import '../../css/d/detp2zu6b.css';
import '../../css/p/p2wicfbmm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="afgucnb6q"/><path clip-rule="evenodd" class="fo94usbna"/><path clip-rule="evenodd" class="detp2zu6b"/><path class="p2wicfbmm"/></g>`,
		"fallback": "glyphs:dollar-bill-wave-outline",
	});
}

export default Component;
