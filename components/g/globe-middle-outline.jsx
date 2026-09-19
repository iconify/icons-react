import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c50p--p2h.css';
import '../../css/z/zjqd71gop.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c50p--p2h"/><path class="zjqd71gop"/></g>`,
		"fallback": "glyphs:globe-middle-outline",
	});
}

export default Component;
