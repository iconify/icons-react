import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rl-h23bsm.css';
import '../../css/p/pg5b7zw0z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rl-h23bsm"/><path class="pg5b7zw0z"/></g>`,
		"fallback": "glyphs:folder-outline",
	});
}

export default Component;
