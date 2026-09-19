import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwl-ejw4u.css';
import '../../css/q/q2k9kubjc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hwl-ejw4u"/><path class="q2k9kubjc"/></g>`,
		"fallback": "glyphs:book-spine-bold",
	});
}

export default Component;
