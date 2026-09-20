import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/a/avaagl-op.css';
import '../../css/p/po-zpnv9w.css';
import '../../css/k/kmtvfhb6h.css';
import '../../css/e/e7o0lxbpl.css';
import '../../css/v/vy8u-xbbo.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGkEqkxb5W"><path class="k5-vjlrin"/><path class="avaagl-op"/><path clip-rule="evenodd" class="po-zpnv9w"/><path class="kmtvfhb6h"/><path class="e7o0lxbpl"/><path clip-rule="evenodd" class="vy8u-xbbo"/></mask></defs><circle mask="url(#SVGkEqkxb5W)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:cv-circle-filled",
	});
}

export default Component;
