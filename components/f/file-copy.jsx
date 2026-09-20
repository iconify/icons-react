import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3owh3b3e.css';
import '../../css/i/i_jkyym3k.css';
import '../../css/q/qkseeyfad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d3owh3b3e"/><path class="i_jkyym3k"/><path class="qkseeyfad"/></g>`,
		"fallback": "tdesign:file-copy",
	});
}

export default Component;
