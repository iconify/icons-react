import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znxjo0brp.css';
import '../../css/x/xamrf4vqd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="znxjo0brp"/><path class="xamrf4vqd"/></g>`,
		"fallback": "glyphs-poly:cloud-1",
	});
}

export default Component;
