import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncvh-zugt.css';
import '../../css/k/kxru1fbzg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncvh-zugt"/><rect class="kxru1fbzg"/></g>`,
		"fallback": "glyphs:center-focus-weak-bold",
	});
}

export default Component;
