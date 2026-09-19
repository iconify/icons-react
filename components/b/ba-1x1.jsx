import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy6v7eb4r.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yifbtub0f.css';
import '../../css/k/k3jz1jnlc.css';
import '../../css/g/gb9ydqb4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="d2kvgvbvc"><path class="yifbtub0f"/><path class="k3jz1jnlc"/><path class="gb9ydqb4e"/></g>`,
		"fallback": "flag:ba-1x1",
	});
}

export default Component;
