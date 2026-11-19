import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmcnghoau.css';
import '../../css/b/bge5drf7z.css';
import '../../css/y/y4_0nvbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dmcnghoau"/><path class="bge5drf7z"/><path class="y4_0nvbdl"/></g>`,
		"fallback": "andrsrxn:file-sparkle",
	});
}

export default Component;
