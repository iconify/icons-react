import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6u4lus2a.css';
import '../../css/s/spvo1lbuz.css';
import '../../css/z/zlllymb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j6u4lus2a"/><path class="spvo1lbuz"/><path class="zlllymb8d"/></g>`,
		"fallback": "tdesign:animation-1",
	});
}

export default Component;
